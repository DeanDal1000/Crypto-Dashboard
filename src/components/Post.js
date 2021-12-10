import react, { useEffect, useState } from 'react';

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down('sm')]: {
      height: 150,
    },
  },
}));

const Post = ({ img, title }) => {
  const classes = useStyles();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://latest-crypto-news.p.rapidapi.com/newsbtc/nft/latest',
      headers: {
        'x-rapidapi-host': 'latest-crypto-news.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_NEWS_API_KEY,
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setNews(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {news.map((article, id) => (
        <Card key={id} className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={article.articleImage}
              title="My Post"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                {article.articleTitle}
              </Typography>
              <Typography variant="body2"></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Typography size="small" color="primary">
              {article.articleDate}
            </Typography>
            <a href={article.articleUrl}>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </a>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Post;
