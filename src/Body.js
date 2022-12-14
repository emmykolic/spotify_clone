import React from 'react';
import './Body.css';
import Header from './Header'
import SongRow from './SongRow'
import { useDataLayerValue } from './DataLayer'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Body({spotify}) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue()
  return (
    <div className='body'>
      <Header spotify={spotify}/>
      <div className="body__info">
        <img src="{ discover_weekly?.images[0].url}" alt=""/>
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon className="body__shuffle2" fontSize="large"/>
          <MoreHorizIcon className="body__shuffle2"/>
        </div>
        {/* {Lists Of Songs} */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body
