import style from './loader.module.css';

const Loader = () => (
    <div className={style['lds-ring']}><div></div><div></div><div></div><div></div></div>
);

export default Loader;