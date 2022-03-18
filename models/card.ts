class Card{
id: number;
title: string;
description: string;
thumbnail:string;

constructor(id:number, title:string, description: string, thumbnail:string){
  this.id= id;
  this.title = title;
  this.description = description;
  this.thumbnail= thumbnail;
}
}

export default Card;