import { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Termscondition() {


    return (
        <>
          <Head title="Terms and Condition" />
          <Navbar/>

          <section class="health_term_conditions_wrapper">
          <div class="health_remedy_terms">
            <h3>Terms & Conditions</h3>
            <p>Welcome to Health Remedy, an online platform. You agree to be bound by these Terms and Conditions by accessing and using the Healthy Remedy mobile application. If you disagree with these Terms and Conditions, please do not use Health Remedy.</p>
           <h3>Information</h3>
            <p> This app is related to health but this app is not affiliated with a doctor or any health institution, hence you use this app remedies also consult with a doctor if anyone gets hurt by the information in this app, then it has nothing to do with this
                app. He is responsible.</p>
                <h3>Introduction</h3>
            <p> Health Remedy, the owner and operator of Health Remedy, is committed to protecting your privacy and ensuring your personal information is handled safely and responsibly. This privacy policy outlines the types of personal information we may collect
                from you when you use Health Remedy, and how we share and protect that information.</p>
            <h3>Information We Collect</h3>
                <p> When you use Health Remedy, we may collect the following types of personal information from you:
                <br/> Name, address, and phone number
                <br/> Email address
                <br/> Payment information (such as credit card details)</p>
            <p>We may also collect non-personal information about your use of Health Remedy, such as the type of device you use, the pages you visit, and your IP address.</p>
            <h3>How We Use Your Information</h3>
            <p>We use the personal information we collect from you to provide you with the products and services offered by Health Remedy, to process your orders and payments, to communicate with you about your orders, and to personalize your shopping experience.
                We may also use your information to improve our platform and provide you with marketing communications that interest you.</p>
            <h3>How We Share Your Information</h3>
                <p> We may share your personal information with third-party service providers who help us to process your orders and payments, deliver products to you, and provide marketing communications. We may also share your information with law enforcement or regulatory
                authorities if we are required to do so by law.</p>
           <h3>Notification Premium Feature</h3>
                <p> When you choose to use this premium feature, We collect receiving notifications from child devices, store the relevant information such as notification content, sender information, timestamp, etc. in database.and send to the Gardian device through
                Your Notification Saver. By opting to use this feature, you agree to the collection and sharing of notification data. If you do not agree, please refrain from using this premium feature.</p>
            <h3>Account Creation and Use</h3>
                <p> To use Health Remedy without signup, but for premium you must create an account and provide accurate and complete information. You are responsible for maintaining the confidentiality of your account information and all activities under your account.
                You agree to notify Health Remedy of unauthorized use of your account or any other security breach.</p>
            <h3>Security</h3>
                <p>We take appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or method of electronic storage
                is entirely secure, so we cannot guarantee the absolute security of your information.</p>
            <h3>Termination</h3>
                <p>You may terminate your Health Remedy account anytime by deleting the app from your device. Once you delete your account, all data associated with your account will be permanently deleted from Health Remedy servers.</p>
            <h3>Limitation of Liability</h3>
                <p> Health Remedy shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from or in connection with using Health Remedy. Health Remedy makes no warranties or representations of any kind, express or implied,
                including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
            <h3>Governing Law and Dispute Resolution</h3>
                <p>These Terms and Conditions shall be governed by and construed by the jurisdiction's laws where Health Remedy is operated. Any dispute arising out of or in connection with these Terms and Conditions shall be resolved through binding arbitration per
                the rules of the applicable arbitration association.</p>
           <h3>Changes to the Privacy Policy</h3>
                <p> Health Remedy reserves the right to modify this privacy policy without notice. Your continued use of Health Remedy after any such modification constitutes your acceptance of the revised privacy policy.</p>
            <h3>Contact Us</h3>
                <p> If you have any questions or concerns about this Terms and Conditions and privacy policy, please contact us through the way we provided in-app. By using Health Remedy, you acknowledge that you have read, understood, and agree to this Terms and Conditions.</p>
            </div>
    </section>
            <div>
               <Footer/>
            </div>
        </>
    );
}
