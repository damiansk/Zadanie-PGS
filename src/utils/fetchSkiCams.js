import axios from 'axios';

const SKICAMS_URL = 'https://makevoid-skicams.p.mashape.com/cams.json';

export default (camsNames, callback) =>
  axios.get(SKICAMS_URL, {
    headers: {'X-Mashape-Key': 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw'}
  })
  .then(filterAndMapResponseData(camsNames, callback));

const filterAndMapResponseData =
  (camsNames, callback) =>
    ({data}) => {
      const skicams = Object.keys(data)
        .filter(id => camsNames.includes(data[id].name))
        .map(id => ({
          ...data[id],
          cams: Object.keys(data[id].cams).slice(0, 2).map(camId => data[id].cams[camId])
        }))
        .reduce((cams, currCam) => ({...cams, [currCam.name]: currCam.cams}), {});
      
      callback(skicams);
    };