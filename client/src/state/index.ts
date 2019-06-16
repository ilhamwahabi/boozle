import { action, observable, decorate, computed } from "mobx";

class State {
  currentPosition = [-6.2441985, 106.8029644];
  places: { name; location; img; desc; position; price; rating }[] = [
    {
      name: "Lotus Futsal",
      location: "Karet Kuningan, Setiabudi",
      img: "https://images.pexels.com/photos/1383775/pexels-photo-1383775.jpeg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur debitis fuga aliquid iure ipsum ex quae eos. Velit, consectetur officiis?`,
      position: [-6.240299, 106.8009648],
      price: "80.000",
      rating: 2
    },
    {
      name: "Wicaksono Futsal",
      location: "Jalan Jambu, Kembangan",
      img:
        "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur debitis fuga aliquid iure ipsum ex quae eos. Velit, consectetur officiis?`,
      position: [-6.248098, 106.808964],
      price: "200.000",
      rating: 5
    }
  ];

  selectedPlace(index) {
    return this.places[index];
  }
}

decorate(State, {
  places: observable,
  currentPosition: observable,
  selectedPlace: action
});

export default new State();
