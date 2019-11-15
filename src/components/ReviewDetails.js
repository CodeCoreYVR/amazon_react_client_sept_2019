import React from 'react';
import { Button } from 'react-bootstrap';


function ReviewDetails(props) {
  console.log(props);
  const { body, rating, created_at, reviewer = {}, onDeleteClick = () => {} } = props;

  const { full_name } = reviewer;
  return (
    <div>
      <p>
        <strong>{full_name}:</strong> {rating}
      </p>
      <p>{body}</p>
      <p>{created_at}</p>
      <br/>
      <Button bsStyle="primary" onClick={()=> onDeleteClick(props.id)}>Delete</Button>
      <hr />
    </div>
  );
}

export default ReviewDetails;
