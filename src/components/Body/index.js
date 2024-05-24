// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div>
          {showLeftNavbar ? (
            <div>
              <h1>Left Navbar Menu</h1>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div>
              <h1>Content</h1>
              <p>
                Lorem ipsum dolor sit amet,consectetur edipiscing elit, sed do
                elusmod tempor insididant ut labore et dolore magna aliqua. Ut
                enim ad minim venlam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div>
              <h1>Right Navbar</h1>
              <div>
                <p>Ad 1</p>
              </div>
              <div>
                <p>Ad 1</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
