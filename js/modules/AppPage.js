export default {
    template: `
    <section>
    <h1>main page</h1>
    <form id="my-form">
        <label for="username">Enter Username:</label>
        <input v-model="uname" type="text" name="username" required placeholder="username">

        <label for="password">Enter Password:</label>
        <input v-model="pword" type="password" name="password" required placeholder="password">
        <input @click="submitData" type="submit" value="Submit>
    </form>
    
    </section>
    `,

    data: function() {
        return {
            uname: "",
            pword: ""
        }
    },

    methods: {
        submitData() {
            // hit an api with a fetch call
            // refer to the mailform example from last semester -> the ndo mailer setup
        }
    }
}