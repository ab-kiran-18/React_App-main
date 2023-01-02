import React from "react";

const Contact = () => {
    return (
        <div className="container mt-5">
            <div className="py-4">
                <form class="row g-3">
                    <div class="col-8">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" />
                    </div>
                    <div class="col-8">
                        <label for="inputPhoneNumber" class="form-label">phone number</label>
                        <input type="text" class="form-control" id="PhoneNumber" />
                    </div>
                    <div class="col-8">
                        <label for="inputText" class="form-label">message</label>
                        <textarea type="text-area" class="form-control" id="message" />
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">send</button>
                    </div>
                </form>
            </div>
        </div>
    )
};


export default Contact;