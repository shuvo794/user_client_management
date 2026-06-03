import { use } from "react";

const Users = ( { userPromise } ) =>
{
    const users = use( userPromise );
    console.log( 'lvjcljvclj', users );
    return (
        <div>
            <h2>Users</h2>
            <form action="">
                <input type="text" placeholder="Name" />
                <br />
                <input type="email" placeholder="Email" />
                <br />
                <button type="submit">Add User</button>
            </form>
            { users.map( user => (
                <div key={ user.id }>
                    <p>{ user.name } Email : { user.email }</p>
                </div>
            ) ) }
        </div>
    );
};

export default Users;