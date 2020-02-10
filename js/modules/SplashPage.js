export default {
    template: `<section><h1>{{ message }}</h1>
                <button @click="registerUser">Register for Awesome Swag!</button>
    </section>`,

    data: function () {
        return {
            message: "welcome to my super awesome app!"
        }
    },
    methods: {
        registerUser() {
            console.log('clicked register button')
        }
    }
}