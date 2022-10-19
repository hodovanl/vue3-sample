import PersonComponent from "./PersonComponent.js";

export default {
  template: `
      <template v-for="(p, index) in personList">
        <span style="background-color:lightgreen;">Person #{{index+1}}:</span><br>
        <person-component :person="p">
        </person-component>
        <br>
      </template>

      <button v-on:click="displayNames()">Display Names</button>
    `,
  data() {
    return {
      personList: [
        { fName: 'Erik', lName: 'Everett' },
        { fName: 'Jewell', lName: 'Phillips' },
        { fName: 'Olin', lName: 'Thompson' },
        { fName: 'Dolores', lName: 'Mcdaniel' },
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
