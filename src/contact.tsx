
const ContactPage = () => {

    return (
        <div id="contact" className="min-h-screen">
            <div className="flex flex-row bg-gray-300">
                <form>
                    <h1>Contact form</h1>
                    <label htmlFor="email">Email</label>
                    <input className="" id="email" name="email"></input>
                    <label htmlFor="name">Name:</label>
                    <input className="" id="name" name="name"></input>
                    <label htmlFor="message">Message:</label>
                    <textarea className="" id="message" name="message"></textarea>
                    <button className="" type="submit">Get in Touch</button>
                </form>
                <div>
                    <h1>Quote</h1>

                    <form>
                        <h1>Subscribe to our news letters</h1>
                        <label htmlFor="email">Email:</label>
                        <input className="" id="email" name="email"></input>
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

        </div>)
}

export default ContactPage