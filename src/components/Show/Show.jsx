import React, { PureComponent } from 'react'
import { getShowInfo } from '../../api';

class Show extends PureComponent {
    state = { showId: '', data: '' };

    componentDidMount = async () => {
        const { showId } = this.props;    
        if (showId) {
            const data = await getShowInfo(showId);
            this.setState({ showId, data: data });
        }
    };

    render() {
        console.log('render');
        const { data } = this.state;        
        if (!data) {
            return <p className="show-inforation t-show-info">Шоу не выбрано</p>;
        }
        const { image, name, genres, summary } = data;
        return(
            <div className="show">
                <img className="show-image" src={image.medium} alt="House" />
                <h2 className="show-label t-show-name">{name}</h2>
                <p className="show-text t-show-genre">
                    <b>Жанр: </b>{genres.join(', ')}
                </p>
                <p className="show-text t-show-summary" dangerouslySetInnerHTML={{ __html: summary }} />
            </div>
        );
    }
}

export default Show  