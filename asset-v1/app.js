
var app=new function(){this.name="Santa",this.version="1",this.date="2025",this.folder="asset-v1/",this.looptime=11295,this.bpm=170,this.totalframe=542,this.nbpolo=7,this.nbloopbonus=3,this.bonusloopA=!0,this.bonusendloopA=!0,this.recmaxloop=68,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepicto="game-picto.png",this.colBck="#0b072c",this.col0="#7e518d",this.col1="#393069",this.col2="#251f59",this.col3="#15103d",this.col4="#0b0720",this.animearray=[{name:"1_chrisball",color:"8b4648",uniqsnd:!0},{name:"2_snow-hit",color:"5c2832",uniqsnd:!0},{name:"3_eyefall",color:"2c4434",uniqsnd:!0},{name:"4_drummer",color:"ac726c",uniqsnd:!0},{name:"5_no",color:"777",uniqsnd:!0},{name:"6_bass",color:"406473",uniqsnd:!0},{name:"7_elf",color:"517963",uniqsnd:!0},{name:"8_bellgh",color:"c8a45c",uniqsnd:!0},{name:"9_santa",color:"5c2832",uniqsnd:!0},{name:"10_no",color:"777",uniqsnd:!0},{name:"11_led",color:"6b2b1e",uniqsnd:!0},{name:"12_scarf",color:"28143e",uniqsnd:!0},{name:"13_trump",color:"3b4949",uniqsnd:!0},{name:"14_gift",color:"c8a45c",uniqsnd:!0},{name:"15_no",color:"777",uniqsnd:!0},{name:"16_rudolph",color:"a76e38",uniqsnd:!1},{name:"17_kid",color:"005090",uniqsnd:!1},{name:"18_poinsetta",color:"2c4434",uniqsnd:!1},{name:"19_spirit",color:"758e8e",uniqsnd:!0},{name:"20_no",color:"777",uniqsnd:!0}],this.bonusarray=[];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};