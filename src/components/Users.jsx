import { use, useState } from "react";

const Users = ( { userPromise } ) =>
{
    const instialUsers = use( userPromise );
    const [ users, setUsers ] = useState( instialUsers );
    const handleAddUser = ( event ) =>
    {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;

        console.log( "Adding user:", name, email );

        fetch( 'http://localhost:3000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( { name, email } )
        } )
            .then( ( response ) => response.json() )
            .then( ( newUser ) =>
            {
                console.log( "User added:", newUser );
                const newUsers = [ ...users, newUser ];
                setUsers( newUsers );
            } );

        // optional: reset form
        form.reset();
    };

    return (
        <div>
            <h2>Users</h2>

            <form onSubmit={ handleAddUser }>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                />
                <br />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                />
                <br />

                <button type="submit">Add User</button>
            </form>

            { users.map( ( user ) => (
                <div key={ user.id }>
                    <p>
                        { user.name } — Email: { user.email }
                    </p>
                </div>
            ) ) }
        </div>
    );
};

export default Users;