import axios from "axios";
import { useEffect, useState } from "react";
import { Col, ListGroup } from "react-bootstrap";
import { API_URL } from "../utils/constant";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUtensils, faCheese } from '@fortawesome/free-solid-svg-icons';

const Icon = ({ name }) => {
  if (name === 'Minuman') return <FontAwesomeIcon icon={faCoffee} className="mr-2" />;
  if (name === 'Makanan') return <FontAwesomeIcon icon={faUtensils} className="mr-3" />;
  if (name === 'Cemilan') return <FontAwesomeIcon icon={faCheese} className="mr-3" />;
  return null; // Add this line to handle cases where name doesn't match
};

const ListCategories = ({ changeProductsByCategory, chooseCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await axios.get(`${API_URL}categories`);
        setCategories(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }

    getCategories();
  }, []); // You can add API_URL as a dependency if it is dynamic

  return (
    <Col md={2} mt={2}>
      <h4><strong>Kategori</strong></h4>
      <hr />
      <ListGroup>
        {categories.map(category => (
          <ListGroup.Item
            key={category.id}
            onClick={() => changeProductsByCategory(category.name)} // Use an arrow function
            className={chooseCategory === category.name ? 'active' : ''}
          >
            <Icon name={category.name} /> {category.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Col>
  );
};

export default ListCategories;
