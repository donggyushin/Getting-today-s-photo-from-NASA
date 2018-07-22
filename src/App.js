import React, { Component } from "react";
import ViewerTemplate from "./components/ViewerTemplate";
import * as api from "./lib/api";
import moment from "moment";

class App extends Component {
  state = {
    date: null,
    title: null,
    url: null,
    mediaType: null,
    loading: false,
    maxDate: null
  };

  getAPOD(date) {
    if (this.state.loading) {
      return;
    }

    this.setState({
      loading: true
    });

    api
      .getAPOD(date)
      .then(response => response.data)
      .then(data => {
        console.log(data);

        const { date, media_type, title, url } = data;
        if (!this.state.maxDate) {
          this.setState({
            maxDate: date
          });
        }
        this.setState({
          ...this.state,
          date: date,
          title: title,
          url: url,
          mediaType: media_type
        });
      })
      .catch(e => console.log(e));

    this.setState({
      ...this.state,
      loading: false
    });
  }

  componentDidMount() {
    this.getAPOD();
  }

  prevButton = () => {
    const { date } = this.state;
    const prevDate = moment(date)
      .subtract(1, "days")
      .format("YYYY-MM-DD");
    this.getAPOD(prevDate);
    this.setState({
      ...this.state,
      date: prevDate
    });
  };

  nextButton = () => {
    const { date, maxDate } = this.state;
    if (date === maxDate) {
      console.log("가장 마지막 사진입니다. ");
      return;
    }
    const nextDate = moment(date)
      .add(1, "days")
      .format("YYYY-MM-DD");
    this.getAPOD(nextDate);
    this.setState({
      ...this.state,
      date: nextDate
    });
  };

  render() {
    const { date, url, title, mediaType, loading } = this.state;

    return (
      <div className="App">
        <ViewerTemplate
          date={date}
          url={url}
          title={title}
          mediaType={mediaType}
          prevButton={this.prevButton}
          nextButton={this.nextButton}
          loading={loading}
        />
      </div>
    );
  }
}

export default App;
