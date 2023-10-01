import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Phonebook App</title>
      </Helmet>
      <div>
        <div>
          <h1>Welcome to Phonebook App</h1>
          <p>Managing your contacts has never been easier.</p>
        </div>

        <ul>
          <li>
            <h2>Keep your contacts close</h2>
            <p>
              Phonebook App allows you to safely store and manage all your
              contacts in one place. No more worries about losing important
              phone numbers. Stay connected with ease.
            </p>
          </li>

          <li>
            <h2>Simplified Contact Management</h2>
            <p>
              Our user-friendly interface makes it simple to add and manage your
              contacts. You can quickly add new contacts and remove outdated
              ones with just a few clicks. Simplify your life by keeping your
              contacts organized and up to date.
            </p>
          </li>

          <li>
            <h2>Access Your Contacts Anywhere</h2>
            <p>
              Create your account and securely store all your contacts in one
              place. Your data is safely stored in your account, ensuring that
              you're always in touch, no matter where you are.
            </p>
          </li>
        </ul>

        <div>
          <Link to="/register">
            <button>get started now</button>
          </Link>
          <p>
            Already a member? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
