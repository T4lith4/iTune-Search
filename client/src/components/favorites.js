import React from "react";
import { Table } from "reactstrap";
import "../search.css";

export default props => {
  const { favoriteList } = props;

  return (
    <div>
      <Table bordered>
        <tbody>
          <tr className="row-container">
            {favoriteList.map(item => {
              return (
                <div className="fav-box">
                  <a key={item.id} href={item.link}>
                    <td className="favorite-wraper">
                      <img
                        className="favourite-image"
                        src={item.img}
                        alt={item.title} 
                      />
                    </td>
                    <td className="favorite-username">{item.title} is a favorite</td>
                  </a>
                </div>
              );
            })}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
