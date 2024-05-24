// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext '

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavBar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div>
          <h1>Layout</h1>
          <div>
            <input
              type="checkbox"
              id="content"
              checked={showContent}
              onChange={onChangeContent}
            />
            <label htmlFor="content">Content</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="leftNavbar"
              checked={showLeftNavbar}
              onChange={onChangeLeftNavBar}
            />
            <label htmlFor="LeftNavbar">Left Navbar</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="rightNavbar"
              checked={showRightNavbar}
              onChange={onChangeRightNavbar}
            />
            <label htmlFor="rightNavbar">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
