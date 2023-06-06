import React, { useState } from "react"
import { Input } from "../index"

export default function StepByStep() {
  const [statusStep, setStatusStep] = useState(1)
  const [totalTruckWeight, setTotalTruckWeight] = useState({
    value: "",
    errors: [],
  })
  const [finalTruckWeight, setFinalTruckWeight] = useState({
    value: "",
    errors: [],
  })
  const [licensePlate, setLicensePlate] = useState({
    value: "",
    errors: [],
  })
  const [dateReceipt, setDateReceipt] = useState({
    value: "",
    errors: [],
  })
  const [idGoodsInvoice, setIdGoodsInvoice] = useState({
    value: "",
    errors: [],
  })
  const [idUser, setIdUser] = useState({
    value: "",
    errors: [],
  })
  const [quantity, setQuantity] = useState({
    value: "",
    errors: [],
  })
  const [dateInvoice, setDateInvoice] = useState({
    value: "",
    errors: [],
  })
  const [supplierName, setSupplierName] = useState({
    value: "",
    errors: [],
  })
  const [price, setPrice] = useState({
    value: "",
    errors: [],
  })
  const [itemCode, seTitemCode] = useState({
    value: "",
    errors: [],
  })
  const [name, setName] = useState({
    value: "",
    errors: [],
  })
  const [weight, setWeight] = useState({
    value: "",
    errors: [],
  })
  const [thickness, setThickness] = useState({
    value: "",
    errors: [],
  })
  const [width, setWidth] = useState({
    value: "",
    errors: [],
  })

  const handleNextStep1 = event => {
    event.preventDefault()
    if (
      totalTruckWeight.value === "" &&
      finalTruckWeight.value === "" &&
      licensePlate.value === "" &&
      dateReceipt.value === "" &&
      idGoodsInvoice.value === "" &&
      idUser.value === ""
    ) {
      setTotalTruckWeight({
        ...totalTruckWeight,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      setFinalTruckWeight({
        ...finalTruckWeight,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      setLicensePlate({
        ...licensePlate,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      setDateReceipt({
        ...dateReceipt,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      setIdGoodsInvoice({
        ...idGoodsInvoice,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      setIdUser({
        ...idUser,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      return
    }
    if (totalTruckWeight.value === "") {
      setTotalTruckWeight({
        ...totalTruckWeight,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      return
    }
    if (finalTruckWeight.value === "") {
      setFinalTruckWeight({
        ...finalTruckWeight,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      return
    }
    if (licensePlate.value === "") {
      setLicensePlate({
        ...licensePlate,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      return
    }
    if (dateReceipt.value === "") {
      setDateReceipt({
        ...dateReceipt,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      return
    }
    if (idGoodsInvoice.value === "") {
      setIdGoodsInvoice({
        ...idGoodsInvoice,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      return
    }
    if (idUser.value === "") {
      setIdUser({
        ...idUser,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      return
    }
    setStatusStep(2)
  }

  const handleNextStep2 = event => {
    event.preventDefault()
    if (
      quantity.value === "" &&
      dateInvoice.value === "" &&
      supplierName.value === "" &&
      price.value === ""
    ) {
      setQuantity({
        ...quantity,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      setDateInvoice({
        ...dateInvoice,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      setSupplierName({
        ...supplierName,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      setPrice({
        ...price,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      return
    }
    if (quantity.value === "") {
      setQuantity({
        ...quantity,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      return
    }
    if (dateInvoice.value === "") {
      setDateInvoice({
        ...dateInvoice,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      return
    }
    if (supplierName.value === "") {
      setSupplierName({
        ...supplierName,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      return
    }
    if (price.value === "") {
      setPrice({
        ...price,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      return
    }
    setStatusStep(3)
  }
  const handlePreStep2 = event => {
    event.preventDefault()
    setStatusStep(1)
  }
  const handleNextStep3 = event => {
    event.preventDefault()
    if (
      itemCode.value === "" &&
      name.value === "" &&
      weight.value === "" &&
      thickness.value === "" &&
      width.value === ""
    ) {
      seTitemCode({
        ...itemCode,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      setName({
        ...name,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      setWeight({
        ...weight,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      setThickness({
        ...thickness,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      setWidth({
        ...width,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      return
    }
    if (itemCode.value === "") {
      seTitemCode({
        ...itemCode,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      return
    }
    if (name.value === "") {
      setName({
        ...name,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      return
    }
    if (weight.value === "") {
      setWeight({
        ...weight,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      return
    }
    if (thickness.value === "") {
      setThickness({
        ...thickness,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      return
    }
    if (width.value === "") {
      setWidth({
        ...width,
        errors: ["Vui lòng nhập dữ liệu"],
      })
      return
    }
    // Xử lý hoàn tất
  }
  const handlePreStep3 = event => {
    event.preventDefault()
    setStatusStep(2)
  }
  return (
    <div>
      <section className="h-full text-gray-600 body-font">
        <div className="flex flex-col flex-wrap px-5 mx-auto">
          {/* Status */}
          <div className="flex flex-wrap mx-auto">
            <a
              className={
                statusStep === 1
                  ? "inline-flex items-center justify-start w-auto px-6 py-3 font-medium leading-none tracking-wider text-indigo-500 no-underline bg-gray-100 border-b-2 border-indigo-500 rounded-t sm:justify-center sm:w-1/2 title-font"
                  : "inline-flex items-center justify-start w-auto px-6 py-3 font-medium leading-none tracking-wider no-underline border-b-2 border-gray-200 sm:justify-center sm:w-1/2 title-font hover:text-gray-900"
              }
            >
              Nhập kho sản phẩm
            </a>
            <a
              className={
                statusStep === 2
                  ? "inline-flex items-center justify-start w-auto px-6 py-3 font-medium leading-none tracking-wider text-indigo-500 no-underline bg-gray-100 border-b-2 border-indigo-500 rounded-t sm:justify-center sm:w-1/2 title-font"
                  : "inline-flex items-center justify-start w-auto px-6 py-3 font-medium leading-none tracking-wider no-underline border-b-2 border-gray-200 sm:justify-center sm:w-1/2 title-font hover:text-gray-900"
              }
            >
              Hoá đơn mua hàng
            </a>
            <a
              className={
                statusStep === 3
                  ? "inline-flex items-center justify-start w-auto px-6 py-3 font-medium leading-none tracking-wider text-indigo-500 no-underline bg-gray-100 border-b-2 border-indigo-500 rounded-t sm:justify-center sm:w-1/2 title-font"
                  : "inline-flex items-center justify-start w-auto px-6 py-3 font-medium leading-none tracking-wider no-underline border-b-2 border-gray-200 sm:justify-center sm:w-1/2 title-font hover:text-gray-900"
              }
            >
              Vật phẩm trong hoá đơn mua hàng
            </a>
          </div>
          {/* Step 1 */}
          {statusStep === 1 && (
            <div className="w-full p-8 mx-auto">
              <h1 className="mb-4 text-2xl font-bold">Nhập kho sản phẩm mới</h1>
              <form>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex-grow">
                    <label
                      htmlFor="totalTruckWeight"
                      className="block mb-2 font-bold text-gray-700"
                    >
                      Cân nặng tổng khi nhập kho:
                    </label>
                    <Input
                      type="number"
                      id="totalTruckWeight"
                      name="totalTruckWeight"
                      value={totalTruckWeight.value}
                      errors={totalTruckWeight.errors}
                      onChange={e => {
                        if (e.length > 0) {
                          setTotalTruckWeight({
                            ...totalTruckWeight,
                            value: e,
                            errors: [],
                          })
                        } else {
                          setTotalTruckWeight({
                            ...totalTruckWeight,
                            value: e,
                            errors: ["Vui lòng nhập dữ liệu"],
                          })
                        }
                      }}
                      className="w-full p-2 border border-gray-400 rounded-md"
                      placeholder="Nhập cân nặng tổng khi nhập kho"
                    />
                  </div>
                  <div className="flex-grow">
                    <label
                      htmlFor="finalTruckWeight"
                      className="block mb-2 font-bold text-gray-700"
                    >
                      Cân nặng cuối cùng của xe khi xuất kho:
                    </label>
                    <Input
                      type="number"
                      id="finalTruckWeight"
                      name="finalTruckWeight"
                      value={finalTruckWeight.value}
                      errors={finalTruckWeight.errors}
                      onChange={e => {
                        if (e.length > 0) {
                          setFinalTruckWeight({
                            ...finalTruckWeight,
                            value: e,
                            errors: [],
                          })
                        } else {
                          setFinalTruckWeight({
                            ...finalTruckWeight,
                            value: e,
                            errors: ["Vui lòng nhập dữ liệu"],
                          })
                        }
                      }}
                      className="w-full p-2 border border-gray-400 rounded-md"
                      placeholder="Nhập cân nặng cuối cùng của xe khi xuất kho"
                    />
                  </div>
                  <div className="flex-grow">
                    <label
                      htmlFor="licensePlate"
                      className="block mb-2 font-bold text-gray-700"
                    >
                      Biển số xe:
                    </label>
                    <Input
                      type="text"
                      id="licensePlate"
                      name="licensePlate"
                      value={licensePlate.value}
                      errors={licensePlate.errors}
                      onChange={e => {
                        if (e.length > 0) {
                          setLicensePlate({
                            ...licensePlate,
                            value: e,
                            errors: [],
                          })
                        } else {
                          setLicensePlate({
                            ...licensePlate,
                            value: e,
                            errors: ["Vui lòng nhập dữ liệu"],
                          })
                        }
                      }}
                      className="w-full p-2 border border-gray-400 rounded-md"
                      placeholder="Nhập biển số xe"
                    />
                  </div>
                  <div className="flex-grow">
                    <label
                      htmlFor="dateReceipt"
                      className="block mb-2 font-bold text-gray-700"
                    >
                      Ngày nhập kho:
                    </label>
                    <Input
                      type="date"
                      id="dateReceipt"
                      name="dateReceipt"
                      value={dateReceipt.value}
                      errors={dateReceipt.errors}
                      onChange={e => {
                        if (e.length > 0) {
                          setDateReceipt({
                            ...dateReceipt,
                            value: e,
                            errors: [],
                          })
                        } else {
                          setDateReceipt({
                            ...dateReceipt,
                            value: e,
                            errors: ["Vui lòng nhập dữ liệu"],
                          })
                        }
                      }}
                      className="w-full p-2 border border-gray-400 rounded-md"
                    />
                  </div>
                  <div className="flex-grow">
                    <label
                      htmlFor="idGoodsInvoice"
                      className="block mb-2 font-bold text-gray-700"
                    >
                      Mã hoá đơn mua hàng:
                    </label>
                    <Input
                      type="text"
                      id="idGoodsInvoice"
                      name="idGoodsInvoice"
                      value={idGoodsInvoice.value}
                      errors={idGoodsInvoice.errors}
                      onChange={e => {
                        if (e.length > 0) {
                          setIdGoodsInvoice({
                            ...idGoodsInvoice,
                            value: e,
                            errors: [],
                          })
                        } else {
                          setIdGoodsInvoice({
                            ...idGoodsInvoice,
                            value: e,
                            errors: ["Vui lòng nhập dữ liệu"],
                          })
                        }
                      }}
                      className="w-full p-2 border border-gray-400 rounded-md"
                      placeholder="Nhập mã hoá đơn mua hàng"
                    />
                  </div>
                  <div className="flex-grow">
                    <label
                      htmlFor="idUser"
                      className="block mb-2 font-bold text-gray-700"
                    >
                      Người phụ trách nhập kho:
                    </label>
                    <Input
                      type="text"
                      id="idUser"
                      name="idUser"
                      value={idUser.value}
                      errors={idUser.errors}
                      onChange={e => {
                        if (e.length > 0) {
                          setIdUser({
                            ...idUser,
                            value: e,
                            errors: [],
                          })
                        } else {
                          setIdUser({
                            ...idUser,
                            value: e,
                            errors: ["Vui lòng nhập dữ liệu"],
                          })
                        }
                      }}
                      className="w-full p-2 border border-gray-400 rounded-md"
                      placeholder="Nhập tên người phụ trách nhập kho"
                    />
                  </div>
                </div>
                <div className="flex justify-center w-full gap-x-6">
                  <button
                    type="submit"
                    onClick={handleNextStep1}
                    className="col-span-2 px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700"
                  >
                    Bước tiếp theo
                  </button>
                </div>
              </form>
            </div>
          )}
          {/* Step 2 */}
          {statusStep === 2 && (
            <div className="w-full p-8 mx-auto">
              <h1 className="mb-4 text-2xl font-bold">Hoá đơn mua hàng</h1>
              <form>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex-grow">
                    <label
                      htmlFor="quantity"
                      className="block mb-2 font-bold text-gray-700"
                    >
                      Số lượng
                    </label>
                    <Input
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={quantity.value}
                      errors={quantity.errors}
                      onChange={e => {
                        if (e.length > 0) {
                          setQuantity({
                            ...quantity,
                            value: e,
                            errors: [],
                          })
                        } else {
                          setQuantity({
                            ...quantity,
                            value: e,
                            errors: ["Vui lòng nhập dữ liệu"],
                          })
                        }
                      }}
                      className="w-full p-2 border border-gray-400 rounded-md"
                      placeholder="Nhập số lượng"
                    />
                  </div>
                  <div className="flex-grow">
                    <label
                      htmlFor="dateInvoice"
                      className="block mb-2 font-bold text-gray-700"
                    >
                      Ngày mua của hoá đơn
                    </label>
                    <Input
                      type="date"
                      id="dateInvoice"
                      name="dateInvoice"
                      value={dateInvoice.value}
                      errors={dateInvoice.errors}
                      onChange={e => {
                        if (e.length > 0) {
                          setDateInvoice({
                            ...dateInvoice,
                            value: e,
                            errors: [],
                          })
                        } else {
                          setDateInvoice({
                            ...dateInvoice,
                            value: e,
                            errors: ["Vui lòng nhập dữ liệu"],
                          })
                        }
                      }}
                      className="w-full p-2 border border-gray-400 rounded-md"
                      placeholder="Nhập ngày mua của hoá đơn"
                    />
                  </div>
                  <div className="flex-grow">
                    <label
                      htmlFor="supplierName"
                      className="block mb-2 font-bold text-gray-700"
                    >
                      Tên nhà cung cấp
                    </label>
                    <Input
                      type="text"
                      id="supplierName"
                      name="supplierName"
                      value={supplierName.value}
                      errors={supplierName.errors}
                      onChange={e => {
                        if (e.length > 0) {
                          setSupplierName({
                            ...supplierName,
                            value: e,
                            errors: [],
                          })
                        } else {
                          setSupplierName({
                            ...supplierName,
                            value: e,
                            errors: ["Vui lòng nhập dữ liệu"],
                          })
                        }
                      }}
                      className="w-full p-2 border border-gray-400 rounded-md"
                      placeholder="Nhập tên nhà cung cấp"
                    />
                  </div>
                  <div className="flex-grow">
                    <label
                      htmlFor="price"
                      className="block mb-2 font-bold text-gray-700"
                    >
                      Giá nhập kho
                    </label>
                    <Input
                      type="number"
                      id="price"
                      name="price"
                      value={price.value}
                      errors={price.errors}
                      onChange={e => {
                        if (e.length > 0) {
                          setPrice({
                            ...price,
                            value: e,
                            errors: [],
                          })
                        } else {
                          setPrice({
                            ...price,
                            value: e,
                            errors: ["Vui lòng nhập dữ liệu"],
                          })
                        }
                      }}
                      className="w-full p-2 border border-gray-400 rounded-md"
                      placeholder="Nhập giá nhập kho"
                    />
                  </div>
                </div>
                <div className="flex justify-center w-full gap-x-6">
                  <button
                    type="submit"
                    onClick={handlePreStep2}
                    className="col-span-2 px-4 py-2 mt-4 font-bold text-blue-500 bg-white border-[1px] border-blue-500 rounded-md hover:text-blue-700"
                  >
                    Bước trước
                  </button>
                  <button
                    type="submit"
                    onClick={handleNextStep2}
                    className="col-span-2 px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700"
                  >
                    Bước tiếp theo
                  </button>
                </div>
              </form>
            </div>
          )}
          {/* Step 3 */}
          {statusStep === 3 && (
            <div className="w-full p-8 mx-auto">
              <h1 className="mb-4 text-2xl font-bold">
                Vật phẩm trong hoá đơn mua hàng
              </h1>
              <form>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex-grow">
                    <label
                      htmlFor="itemCode"
                      className="block mb-2 font-bold text-gray-700"
                    >
                      Mã vật phẩm
                    </label>
                    <Input
                      type="text"
                      id="itemCode"
                      name="itemCode"
                      value={itemCode.value}
                      errors={itemCode.errors}
                      onChange={e => {
                        if (e.length > 0) {
                          seTitemCode({
                            ...itemCode,
                            value: e,
                            errors: [],
                          })
                        } else {
                          seTitemCode({
                            ...itemCode,
                            value: e,
                            errors: ["Vui lòng nhập dữ liệu"],
                          })
                        }
                      }}
                      className="w-full p-2 border border-gray-400 rounded-md"
                      placeholder="Nhập mã vật phẩm"
                    />
                  </div>
                  <div className="flex-grow">
                    <label
                      htmlFor="name"
                      className="block mb-2 font-bold text-gray-700"
                    >
                      Tên vật phẩm
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={name.value}
                      errors={name.errors}
                      onChange={e => {
                        if (e.length > 0) {
                          setName({
                            ...name,
                            value: e,
                            errors: [],
                          })
                        } else {
                          setName({
                            ...name,
                            value: e,
                            errors: ["Vui lòng nhập dữ liệu"],
                          })
                        }
                      }}
                      className="w-full p-2 border border-gray-400 rounded-md"
                      placeholder="Nhập tên vật phẩm"
                    />
                  </div>
                  <div className="flex-grow">
                    <label
                      htmlFor="weight"
                      className="block mb-2 font-bold text-gray-700"
                    >
                      Cân nặng vật phẩm
                    </label>
                    <Input
                      type="number"
                      id="weight"
                      name="weight"
                      value={weight.value}
                      errors={weight.errors}
                      onChange={e => {
                        if (e.length > 0) {
                          setWeight({
                            ...weight,
                            value: e,
                            errors: [],
                          })
                        } else {
                          setWeight({
                            ...weight,
                            value: e,
                            errors: ["Vui lòng nhập dữ liệu"],
                          })
                        }
                      }}
                      className="w-full p-2 border border-gray-400 rounded-md"
                      placeholder="Nhập cân nặng vật phẩm"
                    />
                  </div>
                  <div className="flex-grow">
                    <label
                      htmlFor="thickness"
                      className="block mb-2 font-bold text-gray-700"
                    >
                      Độ dày vật phẩm
                    </label>
                    <Input
                      type="number"
                      id="thickness"
                      name="thickness"
                      value={thickness.value}
                      errors={thickness.errors}
                      onChange={e => {
                        if (e.length > 0) {
                          setThickness({
                            ...thickness,
                            value: e,
                            errors: [],
                          })
                        } else {
                          setThickness({
                            ...thickness,
                            value: e,
                            errors: ["Vui lòng nhập dữ liệu"],
                          })
                        }
                      }}
                      className="w-full p-2 border border-gray-400 rounded-md"
                      placeholder="Nhập độ dày vật phẩm"
                    />
                  </div>
                  <div className="flex-grow">
                    <label
                      htmlFor="width"
                      className="block mb-2 font-bold text-gray-700"
                    >
                      Độ dài khổ vật phẩm
                    </label>
                    <Input
                      type="number"
                      id="width"
                      name="width"
                      value={width.value}
                      errors={width.errors}
                      onChange={e => {
                        if (e.length > 0) {
                          setWidth({
                            ...width,
                            value: e,
                            errors: [],
                          })
                        } else {
                          setWidth({
                            ...width,
                            value: e,
                            errors: ["Vui lòng nhập dữ liệu"],
                          })
                        }
                      }}
                      className="w-full p-2 border border-gray-400 rounded-md"
                      placeholder="Nhập độ dài khổ vật phẩm"
                    />
                  </div>
                </div>
                <div className="flex justify-center w-full gap-x-6">
                  <button
                    type="submit"
                    onClick={handlePreStep3}
                    className="col-span-2 px-4 py-2 mt-4 font-bold text-blue-500 bg-white border-[1px] border-blue-500 rounded-md hover:text-blue-700"
                  >
                    Bước trước
                  </button>
                  <button
                    type="submit"
                    onClick={handleNextStep3}
                    className="col-span-2 px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700"
                  >
                    Bước tiếp theo
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
