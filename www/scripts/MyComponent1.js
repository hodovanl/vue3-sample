import PersonComponent from "./PersonComponent.js";

export default {
  template: `
      <div style="display:flex;row-gap:20px;flex-direction:column;">
        <div v-for="(p, index) in personList" style="border:1px solid green;">
          Person #{{index+1}}:<br>
          <person-component :person="p">
          </person-component>
        </div>
      </div>
      <br>
      <button v-on:click="displayNames()">Display Names</button>
    `,
  data() {
    return {
      personList: [
        { fName: 'Andreas', lName: 'Hinton' },
        { fName: 'Rey', lName: 'Morton' },
        { fName: 'Clint', lName: 'Rivers' },
        { fName: 'Wilford', lName: 'Dennis' },
      ]
    };
  },
  methods: {
    displayNames: function () {
      let msg = '';
      for (let p of this.personList) {
        msg += `${p.fName} ${p.lName}\r\n`;
      }
      alert(msg);
    }
  },
  components: {
    PersonComponent,
  },
};
