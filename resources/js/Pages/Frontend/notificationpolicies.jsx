import { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Notificationpolicies() {


    return (
        <>
          <Head title="Notification Privacy Policies" />
          <Navbar/>

          <section class="privacy_policy_wrapper">
          <div class="privacy_policy">
            <h2>Privacy Policy :</h2>
<p>This Privacy Policy explains how Your Notification Saver collects, uses, and shares information about you when you use our Notification Saver App.</p>
<h3>Information We Collect</h3>
<p><span>Notification Data:</span> The App collects and stores notifications from your device to display them within the App's interface. This includes the content of notifications, such as text and media files, and metadata associated with notifications, such
    as timestamps and sender information.</p>
<p><span>Usage Data:</span> We may collect information about how you use the App, such as the features you access, the settings you configure, and the frequency and duration of your interactions with the App.</p>
<h3>Account</h3>
<p><span>User Account:</span> You may be required to create an account to use certain features of the App. You are responsible for maintaining the confidentiality of your account credentials and for any activity that occurs under your account.</p>
<h3>Delete Account Information</h3>
<p>If you wish to delete your account information from our app, you can delete your account by clicking the delete account button on the Home Screen. Please note that deleting your account information will result in the permanent removal of all data associated
    with your account, including [UserEmail, Password, Other data, etc.]. Once deleted, this data cannot be recovered.</p>
<h3>How We Use Your Information</h3>
<p><span>Notification Access Permission:</span> Our app requests permission to access notifications on your device. By granting this permission, you allow our app to read the content of notifications, including text and media, and to perform actions based on the
    information contained in notifications.</p>
<p>We use the information we collect for the following purposes:</p>
<ul>
    <li><span>To Provide and Improve the App:</span> We use notification data to display notifications within the App's interface and to provide you with features and functionalities of the App. We use usage data to understand how users interact with the App and to improve
        its performance and user experience.</li>
    <li><span>To Customize Content:</span> We may use information about your usage patterns to personalize the content and features of the App to meet your preferences and needs better.</li>
    <li><span>To Communicate with You:</span> We may use your contact information to send you notifications, updates, and other communications related to the App.</li>
</ul>
<h3>Information Sharing and Disclosure</h3>
<p>We do not share your personal information with third parties except in the following cases:</p>
<ul>
    <li><span>With Your Consent:</span> We may share your information with third parties if you give us consent to do so.</li>
    <li><span>For Legal Reasons:</span> We may share your information with third parties if we believe that disclosure is necessary to comply with applicable laws, regulations, legal processes, or government requests.</li>
</ul>
<h3>Data Security</h3>
<p>We take reasonable measures to protect the security of your information, but no method of transmission over the internet or electronic storage is completely secure. Therefore, we cannot guarantee the absolute security of your information.</p>
<h3>Changes to This Privacy Policy</h3>
<p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
<h3>Contact Us</h3>
<p>If you have any questions or concerns about our Privacy Policy or our practices regarding your information, please contact us at <a href="mailto:yournotificationsaverhelp@gmail.com">yournotificationsaverhelp@gmail.com</a>.</p>
          </div>
    </section>
            <div>
               <Footer/>
            </div>
        </>
    );
}
