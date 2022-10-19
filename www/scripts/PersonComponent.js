export default {
  template: `
    <table>
      <tr>
        <td>First Name:</td>
        <td><input type="text" v-model="person.fName"></td>
      </tr>
      <tr>
        <td>Last Name:</td>
        <td><input type="text" v-model="person.lName"></td>
      </tr>
    </table>
    `,
  props: ['person']
};
