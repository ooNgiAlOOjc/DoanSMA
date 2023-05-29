import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Input, Select, DatePicker, Checkbox } from "antd";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./InputCreate.css";
import "../tableList/TableList";
const InputCreate = (props) => {
  const [loading, setLoading] = useState(false);
  const [selectedData, setSelectedData] = useState([]);

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {},
  };
  const onFinish = async (fieldsValue) => {
    //onFinish được gọi khi form Submit
    const values = {
      ...fieldsValue,
      "date-picker":
        fieldsValue["date-picker"] &&
        fieldsValue["date-picker"].format("YYYY-MM-DD"), //định dạng giá trị ngày thành chuỗi
    };
    console.log(values);

    try {
      setLoading(true); // Cập nhật loading thành true trước khi gửi yêu cầu

      // Gửi yêu cầu POST
      const postResponse = await axios.post(
        "http://localhost:3001/users",
        values
      );
      console.log("POST response:", postResponse.data);

      // Gửi yêu cầu PUT
      const putResponse = await axios.put(
        "http://localhost:3000/users",
        values
      );
      console.log("PUT response:", putResponse.data);

      // Gửi yêu cầu DELETE
      const deleteResponse = await axios.delete("http://localhost:3000/users");
      console.log("DELETE response:", deleteResponse.data);

      // Gửi yêu cầu GET
      const getResponse = await axios.get("http://localhost:3000/users");
      console.log("GET response:", getResponse.data);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const { RangePicker } = DatePicker;
  const { Option } = Select;

  return (
    <div>
      <form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{
          maxWidth: 300,
        }}
        validateMessages={validateMessages}
      >
        {/* Các trường dữ liệu trong form */}
        <Form.Item
          name="Loai_KH"
          label="Loại KH"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn loại KH!",
            },
          ]}
          labelCol={{ span: 6 }} // Định dạng labelCol để căn chỉnh label bên trái
          wrapperCol={{ span: 18 }} // Định dạng wrapperCol để căn chỉnh ô input
        >
          <Select placeholder="Vui lòng chọn" style={{ width: "100%" }}>
            <Option value="KHXT">KHXT - Xuất Thép</Option>
            <Option value="KHXC">KHXC- Xuất Cuộn</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="Ngay_CT"
          label="Ngày CT"
          {...config}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="Ma_Lo_KH"
          label="Mã Lô KH"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="So_CT"
          label="Số CT"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="Ten_Lo_SX"
          label="Tên Lô SX"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="Ghi_Chu"
          label="Ghi Chú"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="KetThucSanXuat"
          label="Kết thúc sản xuất"
          className="position"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
        >
          <Checkbox className="positionCheck" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
        >
          <Button variant="outline-success" type="submit" disabled={loading}>
            {loading ? "Đang thêm..." : "Thêm"}
          </Button>{" "}
          <Button variant="outline-danger" type="submit" disabled={loading}>
            Sửa
          </Button>{" "}
          <Button variant="outline-info" type="submit" disabled={loading}>
            Xóa
          </Button>{" "}
        </Form.Item>
      </form>
    </div>
  );
};

export default InputCreate;
