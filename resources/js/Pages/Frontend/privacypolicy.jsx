import { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Privacy() {


    return (
        <>
          <Head title="Privacy Policies" />
          <Navbar/>
          <section class="health_term_conditions_wrapper">
          <div class="health_remedy_terms">
            <h3>Privacy Policy</h3>
            <p>This Privacy Policy governs the manner in which Health Remedy collects, uses, maintains, and discloses information collected from users ("User" or "Users") of the Health Remedy mobile application.By downloading and using our application, you agree
                to the terms of this Privacy Policy.</p>
                <h3>Information Collection and Use</h3>
            <p> Health Remedy may collect personally identifiable information from Users while using our premium feature in various ways, including but not limited to when Users register on the app, subscribe to a newsletter, respond to a survey, fill out a form,
                and in connection with other activities, services, features, or resources made available on our app. We may also automatically collect certain information about your use of our application, such as your IP address, device ID, and usage statistics.
                Users may be asked for, as appropriate, a name, email address, and mailing address. Users may, however, visit our app anonymously. We use the information we collect to provide our services to you, including sending or receiving notifications from
                your child’s device. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personal identification information, except that it may prevent them from
                engaging in certain app-related activities.</p>
                <h3>Non-personal Identification Information</h3>
            <p>Health Remedy may collect non-personal identification information about Users whenever they interact with our app. Non-personal identification information may include the browser name, the type of computer, and technical information about Users means
                of connection to our app, such as the operating system and the Internet service providers utilized, and other similar information.</p>
           <h3>How We Share Your Information</h3>
            <p>We may share your information with third-party service providers who assist us in providing our services to you. These service providers may have access to your information only to the extent necessary to perform their functions.</p>
            <h3>Third-Party Links and Services</h3>
            <p>Our application may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party websites or services. We encourage you to read the privacy policies of these third parties before
                sharing your information with them.</p>
            <h3>Security</h3>
                <p>We take reasonable measures to protect your information from unauthorized access, disclosure, or loss. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee the absolute security of your
                information.</p>
                <h3>Changes to this Privacy Policy</h3>
            <p> We may update this Privacy Policy from time to time by posting a new version on our website or within our application. We encourage you to review this Privacy Policy periodically for any changes.</p>
            <h3>Contact Us</h3>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us through the way we provided in-app.</p>
            </div>
    </section>
            <div>
               <Footer/>
            </div>
        </>
    );
}
