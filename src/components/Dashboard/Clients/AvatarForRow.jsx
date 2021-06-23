import React from "react";
import { Avatar } from "@material-ui/core";
import { PropTypes } from "prop-types";

function AvatarForRow({ client }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Avatar
        alt={client.FullName}
        src="/static/images/avatar/1.jpg"
        style={{ backgroundColor: "#6a1be8" }}
      />
      <div style={{ marginLeft: "10px" }}>{client.FullName}</div>
    </div>
  );
}

AvatarForRow.propTypes = {
  client: PropTypes.object,
};

export default AvatarForRow;
