import React from 'react';
import { Link } from 'react-router-dom';

class GroupShow extends React.Component {
  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.groupId);
  }

  render() {
    if (!this.props.group) {
      return null;
    }

    let manage;

    if (this.props.currentUser.id === this.props.group.creator_id) {
      manage = <Link to={`/groups/${this.props.group.id}/manage`}>Manage</Link>;
    };

    let photo;
    if (this.props.group && this.props.group.photo) {
      photo = <img src={this.props.group.photo} />
    }

    return (
      <div className='group-show-page'>
        <div className='group-show-header'>
          {manage}
          <div>
            {photo}
            <div className='group-show-header-text'>
              <h1>{this.props.group.title}</h1>
              <div>
                <i className="fas fa-map-marker-alt"></i>
                <div> New York, NY</div>
              </div>
              <div>
                <i className="fas fa-user-friends"></i>
                <div>[] members</div>
              </div>
              <div>
                <i className="fas fa-user-alt"></i>
                <div>Organized by {this.props.creator.name}</div>
              </div>
            </div>
          </div>
        </div>
        <div className='group-show-right'>
          <div className='group-show-stripe'>
            <div>
              <div>About</div>
              <div>Events</div>
            </div>
            <div>
              <button>Join Group</button> 
            </div>
          </div>
          <div className='group-show-main'>
            <div className='group-show-description'>
              <h2>What we're about</h2>
              <div>{this.props.group.description}</div>
            </div>
            <div className='group-show-events-'>
              <div className='group-show-events-header'>
                <h3>Upcoming events</h3>
                <button>See all</button>
              </div>
              <div>
                events will go here
              </div>
            </div>
          </div>
        </div>
        <div className='group-show-left'>
          
        </div>
      </div>
    );
  }
}

export default GroupShow;