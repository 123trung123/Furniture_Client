import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default function Filter({ onFilter }) {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    onFilter({ name: e.target.value })
  };
  return (
    <div className="filter-container">
      <h4>Tìm Kiếm</h4>
      <Form>
        <FormGroup>
          <Label for="name">Item</Label>
          <Input
            type="text"
            id="name"
            placeholder="Tên sản phẩm..."
            value={name}
            onChange={handleNameChange}
          />
        </FormGroup>
      </Form>
    </div>
  );
}
