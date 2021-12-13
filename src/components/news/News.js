import Navigation from "../navigation/Navigation";
import {Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Typography} from "@mui/material";

const News = ({loading, error, getNews, popularList}) => {
    return (
        <div>
            <Navigation className='news-navigation' />
            <div className='news'>
                {loading ? <CircularProgress /> : null}
                {error ?
                    <div className='news-error'>
                        <p>Возникла ошибка</p>
                        <Button onClick={getNews}>Попробовать обновить</Button>
                    </div>
                    : null
                }
                {popularList.map((el, index) => (
                    <Card sx={{ maxWidth: 345 }} key={index}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={el.media[0]['media-metadata'][2].url}
                            alt={el.media[0].copyright}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {el.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {el.abstract}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href={el.url} target="_blank">Перейти к статье</Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default News;