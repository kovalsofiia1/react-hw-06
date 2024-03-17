import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList({ contacts, onDelete }) {
    return (
        <ul className={css.list}>
            {contacts.length>0 ? (contacts.map((contact) => (
                <li key={contact.id}>
                    <Contact data={contact} onDelete = {onDelete} />
                </li>
            ))) : <p className={css.noContacts}>No contacts!</p>}
        </ul>
    );
}



