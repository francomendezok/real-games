import { Link, Outlet} from "react-router-dom"


export default function Shop () {
    return (
        <div>
          <ul>
            <li>
              <Link to="latest">Latest</Link>
            </li>
            <li>
              <Link to="topRated">Top rated</Link>
            </li>
          </ul>
          <Outlet />

        </div>
      );
}

// If we had data in the parent element, such as a state, that we wanted to pass to any components rendered by that outlet, we would have to use something called context.//