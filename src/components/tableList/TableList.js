import React, { Component } from "react";
import { Table, Checkbox, Input, DatePicker } from "antd";
import { Button } from "antd";
import axios from "axios";
import { SearchOutlined } from "@ant-design/icons";
import moment from "moment";

class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUsers: [],
      selectedRowKeys: [],
      selectedItem: null, // khởi tạo mảng selectedRowKeys rỗng
    };
  }

  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys }); // cập nhật state selectedRowKeys khi người dùng chọn row
  };
  handleItemClick = (item) => {
    this.setState({ selectedItem: item }); // cập nhật state selectedItem khi người dùng chọn row
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/users")
      .then((res) => {
        const listUsers = res && res.data ? res.data : [];
        const dataSource = listUsers.map((user) => ({
          key: user.id,
          Ma_Lo_KH: user.Ma_Lo_KH,
          Ten_Lo_SX: user.Ten_Lo_SX,
          Ngay_CT: user.Ngay_CT,
          KetThuc: user.KetThuc,
          selected: false,
        }));
        this.setState({ listUsers: dataSource });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { listUsers, selectedRowKeys, selectedItem } = this.state; // lấy giá trị selectedRowKeys từ state

    const columns = [
      {
        title: "Mã Lô",
        dataIndex: "Ma_Lo_KH",
        key: "Ma_Lo_KH",
        filterDropdown: ({
          setSelectedKeys,
          selectedKeys,
          confirm,
          clearFilters,
        }) => (
          <div style={{ padding: 8 }}>
            <Input
              placeholder="Tìm kiếm Mã Lô"
              value={selectedKeys[0]}
              onChange={(e) =>
                setSelectedKeys(e.target.value ? [e.target.value] : [])
              }
              onPressEnter={() => confirm()}
              style={{ width: 188, marginBottom: 8, display: "block" }}
            />
            <Button
              type="primary"
              onClick={() => confirm()}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90, marginRight: 8 }}
            >
              Tìm kiếm
            </Button>
            <Button
              onClick={() => clearFilters()}
              size="small"
              style={{ width: 90 }}
            >
              Xóa bộ lọc
            </Button>
          </div>
        ),
        filterIcon: (filtered) => (
          <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
        ),
        onFilter: (value, record) =>
          record.Ma_Lo_KH.toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
      },
      {
        title: "Tên Lô",
        dataIndex: "Ten_Lo_SX",
        key: "Ten_Lo_SX",
        filterDropdown: ({
          setSelectedKeys,
          selectedKeys,
          confirm,
          clearFilters,
        }) => (
          <div style={{ padding: 8 }}>
            <Input
              placeholder="Tìm kiếm Tên Lô"
              value={selectedKeys[0]}
              onChange={(e) =>
                setSelectedKeys(e.target.value ? [e.target.value] : [])
              }
              onPressEnter={() => confirm()}
              style={{ width: 188, marginBottom: 8, display: "block" }}
            />
            <Button
              type="primary"
              onClick={() => confirm()}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90, marginRight: 8 }}
            >
              Tìm kiếm
            </Button>
            <Button
              onClick={() => clearFilters()}
              size="small"
              style={{ width: 90 }}
            >
              Xóa bộ lọc
            </Button>
          </div>
        ),
        filterIcon: (filtered) => (
          <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
        ),
        onFilter: (value, record) =>
          record.Ten_Lo_SX.toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
      },
      {
        title: "Ngày Tạo",
        dataIndex: "Ngay_CT",
        key: "Ngay_CT",
        filterDropdown: ({
          setSelectedKeys,
          selectedKeys,
          confirm,
          clearFilters,
        }) => (
          <div style={{ padding: 8 }}>
            <DatePicker
              style={{ marginBottom: 8, display: "block" }}
              value={selectedKeys[0] ? moment(selectedKeys[0]) : null}
              onChange={(date) =>
                setSelectedKeys(date ? [date.format("YYYY-MM-DD")] : [])
              }
            />
            <Button
              type="primary"
              onClick={() => confirm()}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90, marginRight: 8 }}
            >
              Tìm kiếm
            </Button>
            <Button
              onClick={() => clearFilters()}
              size="small"
              style={{ width: 90 }}
            >
              Xóa bộ lọc
            </Button>
          </div>
        ),
        filterIcon: (filtered) => (
          <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
        ),
        onFilter: (value, record) => {
          const searchDate = moment(value).format("YYYY-MM-DD");
          return moment(record.Ngay_CT).format("YYYY-MM-DD") === searchDate;
        },
      },
      {
        title: "Kết Thúc",
        dataIndex: "ketthuc",
        key: "ketthuc",
        render: (text, record) => (
          <Checkbox
            checked={record.selected} // sử dụng thuộc tính selected để set checked cho Checkbox
            onChange={(e) => {
              const checked = e.target.checked;
              const key = record.key;
              const index = listUsers.findIndex((user) => user.key === key);
              const updatedUser = { ...listUsers[index], selected: checked };
              const updatedListUsers = [
                ...listUsers.slice(0, index),
                updatedUser,
                ...listUsers.slice(index + 1),
              ];
              this.setState({ listUsers: updatedListUsers });
            }}
          />
        ),
      },
    ];

    const dataSource = listUsers;

    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange, // gọi hàm onSelectChange khi người dùng chọn row
    };

    return (
      <div className="space-align-block container">
        <Table
          columns={columns}
          dataSource={dataSource}
          rowSelection={rowSelection} // sử dụng rowSelection để chọn nhiều row
          onRow={(record) => ({
            onClick: () => this.handleItemClick(record), // gọi hàm handleItemClick khi người dùng nhấp vào row
          })}
        />
        {/* Hiển thị biểu mẫu đầu vào */}
        {selectedItem && (
          <form>
            <input type="text" value={selectedItem.Ten_Lo_SX} />
            <input type="date" value={selectedItem.Ngay_CT} />
            {/* Hiển thị các trường khác */}
          </form>
        )}
      </div>
    );
  }
}
TableList.propTypes = {};
export default TableList;
