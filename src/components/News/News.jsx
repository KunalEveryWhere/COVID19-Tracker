import React, { Component } from "react";
import {
  Card,
  CardContent,
  Grid,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import "./News.module.css";
import next from "../../resources/next.png";

const Cards = (items) => {
  return (
    <React.Fragment>
      <div className="sub-heading">Trending News</div>
      <div className="container">
        <Grid container justify="center">
          <Grid item component={Card} xs={12} md={3} className="Card_new_mod">
            <CardActionArea>
              <CardMedia
                image={items.data[0].images[0].url}
                style={{ height: 130 }}
                title="News Article 1 Image Header"
                alt="News Header Image"
              />
              <CardContent className="Card_Content_mod">
                <div className="news_date">
                  {new Date(items.data[0].publishedDateTime)
                    .toDateString()
                    .substring(
                      0,
                      new Date(items.data[0].publishedDateTime)
                        .toDateString()
                        .indexOf(" ")
                    )}
                  {", "}
                  {new Date(items.data[0].publishedDateTime)
                    .toDateString()
                    .substring(
                      new Date(items.data[0].publishedDateTime)
                        .toDateString()
                        .indexOf(" "),
                      new Date(items.data[0].publishedDateTime).length
                    )}
                </div>
                <div className="news-title">{items.data[0].title}</div>
                <div className="news-excerpt">
                  {" "}
                  {items.data[0].excerpt.length > 170
                    ? items.data[0].excerpt.substring(0, 169).concat("...")
                    : items.data[0].excerpt}
                </div>
                <div className="news-link">
                  <a href={items.data[0].webUrl} target="_blank">
                    <img src={next} alt="Know More" height="15" />
                    Find out more
                  </a>
                </div>
              </CardContent>
            </CardActionArea>
          </Grid>
          <Grid item component={Card} xs={12} md={3} className="Card_new_mod">
            <CardActionArea>
              <CardMedia
                image={items.data[1].images[0].url}
                style={{ height: 130 }}
                title="News Article 1 Image Header"
                alt="News Header Image"
              />
              <CardContent className="Card_Content_mod">
                <div className="news_date">
                  {new Date(items.data[1].publishedDateTime)
                    .toDateString()
                    .substring(
                      0,
                      new Date(items.data[1].publishedDateTime)
                        .toDateString()
                        .indexOf(" ")
                    )}
                  {", "}
                  {new Date(items.data[1].publishedDateTime)
                    .toDateString()
                    .substring(
                      new Date(items.data[1].publishedDateTime)
                        .toDateString()
                        .indexOf(" "),
                      new Date(items.data[1].publishedDateTime).length
                    )}
                </div>
                <div className="news-title">{items.data[1].title}</div>
                <div className="news-excerpt">
                  {" "}
                  {items.data[1].excerpt.length > 170
                    ? items.data[1].excerpt.substring(0, 169).concat("...")
                    : items.data[1].excerpt}
                </div>
                <div className="news-link">
                  <a href={items.data[1].webUrl} target="_blank">
                    <img src={next} alt="Know More" height="15" />
                    Find out more
                  </a>
                </div>
              </CardContent>
            </CardActionArea>
          </Grid>
          <Grid item component={Card} xs={12} md={3} className="Card_new_mod">
            <CardActionArea>
              <CardMedia
                image={items.data[2].images[0].url}
                style={{ height: 130 }}
                title="News Article 1 Image Header"
                alt="News Header Image"
              />
              <CardContent className="Card_Content_mod">
                <div className="news_date">
                  {new Date(items.data[2].publishedDateTime)
                    .toDateString()
                    .substring(
                      0,
                      new Date(items.data[2].publishedDateTime)
                        .toDateString()
                        .indexOf(" ")
                    )}
                  {", "}
                  {new Date(items.data[2].publishedDateTime)
                    .toDateString()
                    .substring(
                      new Date(items.data[2].publishedDateTime)
                        .toDateString()
                        .indexOf(" "),
                      new Date(items.data[2].publishedDateTime).length
                    )}
                </div>
                <div className="news-title">{items.data[2].title}</div>
                <div className="news-excerpt">
                  {" "}
                  {items.data[2].excerpt.length > 170
                    ? items.data[2].excerpt.substring(0, 169).concat("...")
                    : items.data[2].excerpt}
                </div>
                <div className="news-link">
                  <a href={items.data[2].webUrl} target="_blank">
                    <img src={next} alt="Know More" height="15" />
                    Find out more
                  </a>
                </div>
              </CardContent>
            </CardActionArea>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
    var myHeaders = new Headers();
    myHeaders.append("Subscription-Key", "b59cb5b919ad4e4aa35373e111109fb9");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://api.smartable.ai/coronavirus/news/global", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        result.news.sort(function (a, b) {
          return b.heat - a.heat;
        });
        this.setState({ isLoaded: true, items: result.news });
      })
      .catch((error) => console.status(500).log("error", error));
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div className="loading-newsfeed">Loading Newsfeed...</div>;
    } else {
      return <Cards data={items} />;
    }
  }
}
