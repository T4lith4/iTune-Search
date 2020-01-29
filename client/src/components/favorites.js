import React from "react";
import { Table } from "reactstrap";
import "../search.css";

//import favoriteList props
export default props => {
  const { favoriteList } = props;

  return (
    <div>
      <h2
        style={{
          display: props.favoriteList.length > 0 ? "block" : "none",
          fontFamily: "Comfortaa"
        }}
      >
        My favorites
      </h2>
      <Table bordered>
        <tbody>
          <tr className="row-container">
            {favoriteList.map(item => {
              return (
                <td key={item.id} className="favorite-wraper">
                  <a href={item.link}>
                    <img
                      className="favourite-image"
                      src={item.img}
                      alt={item.title}
                    />
                  </a>
                  {item.title} <i className="fas fa-play play-icon"></i>
                </td>
              );
            })}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
