export class AppareilService {
  appareils = [
    {

    name:'machine à laver',
    status:'allumé'
  },
  {
  name:'télévision',
  status:'allumé'
  },
  {
    name:'micro-ondes',
    status:'éteint'
  }
  ];
switchOnAll(){
for(let appareil of this.appareils){

  appareil.status= 'allumé'
}
}



switchOffAll(){
for(let appareil of this.appareils){

  appareil.status='éteint'
}
}

switchOnOne(index: number){
  this.appareils[index].status='allumé';
}
switchOffOne(index: number){
  this.appareils[index].status='éteint';


}


}
