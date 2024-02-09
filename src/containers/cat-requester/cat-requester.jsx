import { useEffect } from 'react';
import { useState } from 'react';
import { getRandomCat } from '../../services/cat.service';
import Loader from '../../components/loader/loader';

const CatRequesterResponse = ({ id, urlImage, breeds }) => (
    <div>
        <p>{breeds}</p>
        <img src={urlImage} alt={`Image d'un chat de race : "${breeds}"`} width={500}/>
    </div>
);

const CatRequesterError = () => (
    <div>
        <p>Erreur lors de la récuperation du chat 😿</p>
    </div>
);

const CatRequester = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getRandomCat()
            .then(dataRequest => {
                setData(dataRequest);
            })
            .catch(error => {
                setError(error);
            });
    }, []);

    return (
        <>
            <h2>Votre chat !</h2>
            {!data && !error ? (
                <Loader />
            ) : !!data ? (
                <CatRequesterResponse {...data} />
            ) : (
                <CatRequesterError />
            )}
        </>
    );
};

export default CatRequester;