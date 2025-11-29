import React, { useState } from "react";
import {
  ShoppingCart,
  Search,
  Laptop,
  Star,
  Heart,
  User,
  Package,
  BarChart3,
  LogOut,
  Edit,
  Trash2,
  Plus,
  Download,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  X,
} from "lucide-react";

const LaptopStore = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentView, setCurrentView] = useState("home");
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showNotification, setShowNotification] = useState(null);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [filterBrand, setFilterBrand] = useState("all");
  const [filterPrice, setFilterPrice] = useState("all");
  const [filterStock, setFilterStock] = useState("all");
  const [sortBy, setSortBy] = useState("date-desc");

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [orderInfo, setOrderInfo] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "",
  });
  const [productForm, setProductForm] = useState({
    id: "",
    name: "",
    brand: "",
    specs: "",
    image: "",
    price: "",
    quantity: "",
    category: "",
  });

  const categories = [
    { id: "all", name: "Tất cả", parent: null },
    { id: "laptop", name: "Laptop", parent: null },
    { id: "pc", name: "PC / Máy tính để bàn", parent: null },
    { id: "monitor", name: "Màn hình", parent: null },
    { id: "components", name: "Linh kiện máy tính", parent: null },
    { id: "ram", name: "RAM", parent: "components" },
    { id: "storage", name: "SSD / HDD", parent: "components" },
    { id: "gpu", name: "GPU", parent: "components" },
    { id: "cpu", name: "CPU", parent: "components" },
    { id: "mainboard", name: "Mainboard", parent: "components" },
    { id: "psu", name: "PSU (nguồn)", parent: "components" },
    { id: "cooling", name: "Tản nhiệt", parent: "components" },
    { id: "accessories", name: "Phụ kiện máy tính", parent: null },
    { id: "mouse", name: "Chuột", parent: "accessories" },
    { id: "keyboard", name: "Bàn phím", parent: "accessories" },
    { id: "mousepad", name: "Bàn di", parent: "accessories" },
    { id: "headphone", name: "Tai nghe", parent: "accessories" },
    { id: "hub", name: "Hub / Cáp", parent: "accessories" },
    { id: "external-hdd", name: "Ổ cứng ngoài", parent: "accessories" },
    { id: "cooling-pad", name: "Đế tản", parent: "accessories" },
    { id: "network", name: "Thiết bị mạng", parent: null },
    { id: "router", name: "Router", parent: "network" },
    { id: "wifi-mesh", name: "Wi-Fi Mesh", parent: "network" },
    { id: "network-card", name: "Card mạng", parent: "network" },
  ];

  const brands = [
    "Dell",
    "Apple",
    "Asus",
    "HP",
    "Lenovo",
    "MSI",
    "Corsair",
    "Logitech",
    "Razer",
    "Samsung",
  ];

  const [products, setProducts] = useState([
    {
      id: "LP001",
      name: "Dell XPS 13",
      price: 28990000,
      brand: "Dell",
      category: "laptop",
      image:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400",

      specs: "Intel Core i7, 16GB RAM, 512GB SSD",
      quantity: 15,
      rating: 4.8,
      reviews: 128,
      description: "Laptop cao cấp với thiết kế sang trọng",
      dateAdded: "2024-11-01",
    },
    {
      id: "LP002",
      name: 'MacBook Pro 14"',
      price: 52990000,
      brand: "Apple",
      category: "laptop",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
      specs: "Apple M3 Pro, 18GB RAM",
      quantity: 8,
      rating: 4.9,
      reviews: 256,
      description: "Laptop chuyên nghiệp",
      dateAdded: "2024-11-15",
    },
    {
      id: "LP003",
      name: "ASUS ROG Strix",
      price: 35990000,
      brand: "Asus",
      category: "laptop",
      image:
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400",
      specs: "Intel Core i9, RTX 4070",
      quantity: 12,
      rating: 4.7,
      reviews: 89,
      description: "Laptop gaming",
      dateAdded: "2024-10-20",
    },
    {
      id: "RAM001",
      name: "Corsair Vengeance DDR5",
      price: 3990000,
      brand: "Corsair",
      category: "ram",
      image:
        "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400",
      specs: "32GB DDR5-6000MHz",
      quantity: 25,
      rating: 4.7,
      reviews: 156,
      description: "RAM DDR5 hiệu năng cao",
      dateAdded: "2024-10-15",
    },
    {
      id: "MS001",
      name: "Logitech G Pro",
      price: 3990000,
      brand: "Logitech",
      category: "mouse",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
      specs: "Wireless, 32K DPI",
      quantity: 20,
      rating: 4.9,
      reviews: 234,
      description: "Chuột gaming siêu nhẹ",
      dateAdded: "2024-11-02",
    },
    {
      id: "KB001",
      name: "Razer Huntsman V3 Pro",
      price: 5990000,
      brand: "Razer",
      category: "keyboard",
      image:
        "https://images.unsplash.com/photo-1595225476474-87563907a212?w=400",
      specs: "Optical Switch, RGB",
      quantity: 18,
      rating: 4.8,
      reviews: 178,
      description: "Bàn phím cơ gaming",
      dateAdded: "2024-10-28",
    },
  ]);

  const [users, setUsers] = useState([
    {
      id: "AD001",
      name: "Admin",
      email: "admin@laptopstore.com",
      password: "Admin123",
      role: "admin",
      status: "Hoạt động",
    },
    {
      id: "KH001",
      name: "Test User",
      email: "test@test.com",
      password: "Test123",
      role: "customer",
      status: "Hoạt động",
    },
  ]);

  const [orders, setOrders] = useState([]);

  const showMessage = (message, type = "success") => {
    setShowNotification({ message, type });
    setTimeout(() => setShowNotification(null), 3000);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const toggleCategory = (categoryId) => {
    if (expandedCategories.includes(categoryId)) {
      setExpandedCategories(
        expandedCategories.filter((id) => id !== categoryId)
      );
    } else {
      setExpandedCategories([...expandedCategories, categoryId]);
    }
  };

  const toggleFavorite = (productId) => {
    setFavorites(
      favorites.includes(productId)
        ? favorites.filter((id) => id !== productId)
        : [...favorites, productId]
    );
  };

  const handleLogin = () => {
    const user = users.find(
      (u) => u.email === loginForm.email && u.password === loginForm.password
    );
    if (user && user.status === "Hoạt động") {
      setCurrentUser(user);
      showMessage("Đăng nhập thành công");
      setCurrentView(user.role === "admin" ? "admin-products" : "home");
      setLoginForm({ email: "", password: "" });
    } else {
      showMessage("Email hoặc mật khẩu không đúng", "error");
    }
  };

  const handleRegister = () => {
    const { name, phone, email, password, confirmPassword } = registerForm;
    if (!name || !email || !password) {
      showMessage("Vui lòng nhập đầy đủ thông tin", "error");
      return;
    }
    if (password !== confirmPassword) {
      showMessage("Mật khẩu không khớp", "error");
      return;
    }
    const newUser = {
      id: `KH${users.length}`,
      name,
      email,
      phone,
      password,
      role: "customer",
      status: "Hoạt động",
    };
    setUsers([...users, newUser]);
    showMessage("Đăng ký thành công");
    setRegisterForm({
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setCurrentView("login");
  };

  const addToCart = (product) => {
    if (!currentUser) {
      showMessage("Vui lòng đăng nhập", "error");
      setCurrentView("login");
      return;
    }
    if (product.quantity === 0) {
      showMessage("Sản phẩm đã hết hàng", "error");
      return;
    }
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    showMessage("Đã thêm vào giỏ hàng");
  };

  const updateQuantity = (productId, change) => {
    setCart(
      cart
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.quantity + change;
            return newQty > 0 ? { ...item, quantity: newQty } : item;
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
    showMessage("Xóa thành công");
  };

  const handleCheckout = () => {
    if (
      cart.length === 0 ||
      !orderInfo.name ||
      !orderInfo.phone ||
      !orderInfo.address ||
      !orderInfo.paymentMethod
    ) {
      showMessage("Vui lòng nhập đầy đủ thông tin", "error");
      return;
    }
    const newOrder = {
      id: `DH${orders.length + 1}`,
      customerId: currentUser.id,
      customerName: orderInfo.name,
      phone: orderInfo.phone,
      address: orderInfo.address,
      items: cart,
      totalAmount: cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
      paymentMethod: orderInfo.paymentMethod,
      status: "Chờ xử lý",
      date: new Date().toLocaleDateString("vi-VN"),
    };
    setOrders([...orders, newOrder]);
    setCart([]);
    setOrderInfo({ name: "", phone: "", address: "", paymentMethod: "" });
    setShowCart(false);
    showMessage("Đặt hàng thành công");
    setCurrentView("orders");
  };

  const handleAddProduct = () => {
    const { id, name, brand, specs, image, price, quantity, category } =
      productForm;
    if (!id || !name || !brand || !price || !quantity) {
      showMessage("Vui lòng nhập đầy đủ thông tin", "error");
      return;
    }
    if (products.some((p) => p.id === id)) {
      showMessage("Mã sản phẩm đã tồn tại", "error");
      return;
    }
    const newProduct = {
      id,
      name,
      brand,
      specs,
      image,
      category,
      price: Number(price),
      quantity: Number(quantity),
      rating: 4.5,
      reviews: 0,
      description: "Sản phẩm mới",
      dateAdded: new Date().toISOString().split("T")[0],
    };
    setProducts([...products, newProduct]);
    showMessage("Thêm sản phẩm thành công");
    setProductForm({
      id: "",
      name: "",
      brand: "",
      specs: "",
      image: "",
      price: "",
      quantity: "",
      category: "",
    });
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
      setProducts(products.filter((p) => p.id !== productId));
      showMessage("Xóa thành công");
    }
  };

  const handleUpdateProduct = (productId, field, value) => {
    setProducts(
      products.map((p) =>
        p.id === productId ? { ...p, [field]: Number(value) } : p
      )
    );
    showMessage("Cập nhật thành công");
  };

  const toggleUserStatus = (userId) => {
    setUsers(
      users.map((u) =>
        u.id === userId
          ? { ...u, status: u.status === "Hoạt động" ? "Khóa" : "Hoạt động" }
          : u
      )
    );
    showMessage("Cập nhật trạng thái thành công");
  };

  const filteredProducts = products
    .filter((p) => {
      const matchSearch =
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchTerm.toLowerCase());
      let matchCategory = selectedCategory === "all";
      if (!matchCategory) {
        const selectedCat = categories.find((c) => c.id === selectedCategory);
        if (selectedCat && selectedCat.parent === null) {
          matchCategory =
            p.category === selectedCategory ||
            categories.some(
              (c) => c.parent === selectedCategory && c.id === p.category
            );
        } else {
          matchCategory = p.category === selectedCategory;
        }
      }
      const matchBrand = filterBrand === "all" || p.brand === filterBrand;
      const matchStock =
        filterStock === "all" ||
        (filterStock === "in-stock" && p.quantity > 0) ||
        (filterStock === "out-of-stock" && p.quantity === 0);
      let matchPrice = true;
      if (filterPrice === "under-10") matchPrice = p.price < 10000000;
      else if (filterPrice === "10-20")
        matchPrice = p.price >= 10000000 && p.price <= 20000000;
      else if (filterPrice === "over-20") matchPrice = p.price > 20000000;

      return (
        matchSearch && matchCategory && matchBrand && matchStock && matchPrice
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "date-desc":
          return new Date(b.dateAdded) - new Date(a.dateAdded);
        default:
          return 0;
      }
    });

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalRevenue = orders.reduce(
    (sum, order) => sum + order.totalAmount,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {showNotification && (
        <div
          className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white ${
            showNotification.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {showNotification.message}
        </div>
      )}

      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setCurrentView("home")}
            >
              <Laptop className="w-8 h-8" />
              <h1 className="text-2xl font-bold">LaptopStore</h1>
            </div>

            {currentView !== "login" && currentView !== "register" && (
              <div className="flex-1 max-w-xl mx-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 pl-10 rounded-lg text-gray-800 focus:outline-none"
                  />
                  <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>
            )}

            <div className="flex items-center gap-4">
              {currentUser ? (
                <>
                  {currentUser.role === "admin" ? (
                    <div className="flex gap-2">
                      <button
                        onClick={() => setCurrentView("admin-products")}
                        className="px-3 py-2 rounded-lg bg-blue-700 hover:bg-blue-600 transition"
                      >
                        <Package className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setCurrentView("admin-users")}
                        className="px-3 py-2 rounded-lg bg-blue-700 hover:bg-blue-600 transition"
                      >
                        <User className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setCurrentView("admin-stats")}
                        className="px-3 py-2 rounded-lg bg-blue-700 hover:bg-blue-600 transition"
                      >
                        <BarChart3 className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowCart(!showCart)}
                      className="relative bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center gap-2"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Giỏ hàng
                      {totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
                          {totalItems}
                        </span>
                      )}
                    </button>
                  )}

                  <div className="relative">
                    <button
                      onClick={() => setShowAccountMenu(!showAccountMenu)}
                      className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                      <User className="w-5 h-5" />
                      <span>{currentUser.name}</span>
                    </button>

                    {showAccountMenu && (
                      <>
                        <div
                          className="fixed inset-0 z-40"
                          onClick={() => setShowAccountMenu(false)}
                        />
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50">
                          {currentUser.role === "customer" && (
                            <>
                              <button
                                onClick={() => {
                                  setCurrentView("orders");
                                  setShowAccountMenu(false);
                                }}
                                className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                              >
                                <Package className="w-4 h-4" />
                                Đơn hàng
                              </button>
                              <button
                                onClick={() => {
                                  setShowCart(true);
                                  setShowAccountMenu(false);
                                }}
                                className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                              >
                                <ShoppingCart className="w-4 h-4" />
                                Giỏ hàng
                              </button>
                              <hr className="my-2" />
                            </>
                          )}
                          <button
                            onClick={() => {
                              setCurrentUser(null);
                              setCart([]);
                              setShowAccountMenu(false);
                              showMessage("Đăng xuất thành công");
                            }}
                            className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 flex items-center gap-2"
                          >
                            <LogOut className="w-4 h-4" />
                            Đăng xuất
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="relative">
                    <button
                      onClick={() => setShowAccountMenu(!showAccountMenu)}
                      className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50"
                    >
                      <User className="w-5 h-5" />
                      <span>Tài khoản</span>
                    </button>

                    {showAccountMenu && (
                      <>
                        <div
                          className="fixed inset-0 z-40"
                          onClick={() => setShowAccountMenu(false)}
                        />
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50">
                          <button
                            onClick={() => {
                              setCurrentView("login");
                              setShowAccountMenu(false);
                            }}
                            className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                          >
                            Đăng nhập
                          </button>
                          <button
                            onClick={() => {
                              setCurrentView("register");
                              setShowAccountMenu(false);
                            }}
                            className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                          >
                            Đăng ký
                          </button>
                        </div>
                      </>
                    )}
                  </div>

                  <button
                    onClick={() => showMessage("Vui lòng đăng nhập", "error")}
                    className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Giỏ hàng
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {currentView === "login" && (
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Đăng nhập</h2>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={loginForm.email}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, email: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="password"
                placeholder="Mật khẩu"
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, password: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg"
              />
              <button
                onClick={handleLogin}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
              >
                Đăng nhập
              </button>
              <p className="text-center text-sm">
                Tài khoản test: test@test.com / Test123
              </p>
            </div>
          </div>
        )}

        {currentView === "register" && (
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Đăng ký</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Họ và tên"
                value={registerForm.name}
                onChange={(e) =>
                  setRegisterForm({ ...registerForm, name: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Số điện thoại"
                value={registerForm.phone}
                onChange={(e) =>
                  setRegisterForm({ ...registerForm, phone: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                value={registerForm.email}
                onChange={(e) =>
                  setRegisterForm({ ...registerForm, email: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="password"
                placeholder="Mật khẩu"
                value={registerForm.password}
                onChange={(e) =>
                  setRegisterForm({ ...registerForm, password: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="password"
                placeholder="Nhập lại mật khẩu"
                value={registerForm.confirmPassword}
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    confirmPassword: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border rounded-lg"
              />
              <button
                onClick={handleRegister}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
              >
                Đăng ký
              </button>
            </div>
          </div>
        )}

        {currentView === "home" && (
          <div className="flex gap-6">
            <div className="w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
                <h3 className="font-bold text-lg mb-4">Danh mục</h3>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`w-full text-left px-3 py-2 rounded-lg ${
                      selectedCategory === "all"
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    Tất cả
                  </button>

                  {categories
                    .filter((cat) => cat.parent === null && cat.id !== "all")
                    .map((cat) => {
                      const hasChildren = categories.some(
                        (c) => c.parent === cat.id
                      );
                      const isExpanded = expandedCategories.includes(cat.id);

                      return (
                        <div key={cat.id}>
                          <button
                            onClick={() => {
                              setSelectedCategory(cat.id);
                              if (hasChildren) toggleCategory(cat.id);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between ${
                              selectedCategory === cat.id
                                ? "bg-blue-600 text-white"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            <span>{cat.name}</span>
                            {hasChildren &&
                              (isExpanded ? (
                                <ChevronDown className="w-4 h-4" />
                              ) : (
                                <ChevronRight className="w-4 h-4" />
                              ))}
                          </button>

                          {hasChildren && isExpanded && (
                            <div className="ml-4 mt-1 space-y-1">
                              {categories
                                .filter((c) => c.parent === cat.id)
                                .map((subCat) => (
                                  <button
                                    key={subCat.id}
                                    onClick={() =>
                                      setSelectedCategory(subCat.id)
                                    }
                                    className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                                      selectedCategory === subCat.id
                                        ? "bg-blue-500 text-white"
                                        : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                  >
                                    • {subCat.name}
                                  </button>
                                ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <select
                    value={filterBrand}
                    onChange={(e) => setFilterBrand(e.target.value)}
                    className="px-3 py-2 border rounded-lg"
                  >
                    <option value="all">Tất cả hãng</option>
                    {brands.map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>
                  <select
                    value={filterPrice}
                    onChange={(e) => setFilterPrice(e.target.value)}
                    className="px-3 py-2 border rounded-lg"
                  >
                    <option value="all">Tất cả giá</option>
                    <option value="under-10">Dưới 10 triệu</option>
                    <option value="10-20">10-20 triệu</option>
                    <option value="over-20">Trên 20 triệu</option>
                  </select>
                  <select
                    value={filterStock}
                    onChange={(e) => setFilterStock(e.target.value)}
                    className="px-3 py-2 border rounded-lg"
                  >
                    <option value="all">Tất cả</option>
                    <option value="in-stock">Còn hàng</option>
                    <option value="out-of-stock">Hết hàng</option>
                  </select>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border rounded-lg"
                  >
                    <option value="date-desc">Mới nhất</option>
                    <option value="price-asc">Giá tăng dần</option>
                    <option value="price-desc">Giá giảm dần</option>
                  </select>
                  <button
                    onClick={() => {
                      setFilterBrand("all");
                      setFilterPrice("all");
                      setFilterStock("all");
                      setSortBy("date-desc");
                    }}
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    Xóa bộ lọc
                  </button>
                </div>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl shadow-md hover:shadow-xl transition"
                    >
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover rounded-t-xl cursor-pointer"
                          onClick={() => {
                            setSelectedProduct(product);
                            setCurrentView("product-detail");
                          }}
                        />
                        <button
                          onClick={() => toggleFavorite(product.id)}
                          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
                        >
                          <Heart
                            className={`w-5 h-5 ${
                              favorites.includes(product.id)
                                ? "fill-red-500 text-red-500"
                                : "text-gray-400"
                            }`}
                          />
                        </button>
                        {product.quantity === 0 && (
                          <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Hết hàng
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3
                          className="font-bold text-lg mb-2 cursor-pointer hover:text-blue-600"
                          onClick={() => {
                            setSelectedProduct(product);
                            setCurrentView("product-detail");
                          }}
                        >
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {product.specs}
                        </p>
                        <div className="flex items-center gap-1 mb-3">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-semibold">
                            {product.rating}
                          </span>
                          <span className="text-sm text-gray-500 ml-1">
                            ({product.reviews})
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xl font-bold text-blue-600">
                            {formatPrice(product.price)}
                          </span>
                          <span className="text-sm text-gray-600">
                            Kho: {product.quantity}
                          </span>
                        </div>
                        <button
                          onClick={() => addToCart(product)}
                          disabled={product.quantity === 0}
                          className={`w-full py-2 rounded-lg flex items-center justify-center gap-2 ${
                            product.quantity > 0
                              ? "bg-blue-600 text-white hover:bg-blue-700"
                              : "bg-gray-300 text-gray-500 cursor-not-allowed"
                          }`}
                        >
                          <ShoppingCart className="w-4 h-4" />
                          {product.quantity > 0 ? "Thêm vào giỏ" : "Hết hàng"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg">
                  <p className="text-gray-500">Không tìm thấy sản phẩm</p>
                </div>
              )}
            </div>
          </div>
        )}

        {currentView === "product-detail" && selectedProduct && (
          <div className="max-w-7xl mx-auto">
            <button
              onClick={() => setCurrentView("home")}
              className="mb-4 text-blue-600 hover:underline flex items-center gap-2"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
              Quay lại danh sách
            </button>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-96 object-cover rounded-lg mb-4"
                  />
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <img
                        key={i}
                        src={selectedProduct.image}
                        alt=""
                        className="w-full h-20 object-cover rounded border-2 border-gray-200 cursor-pointer hover:border-blue-500"
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h1 className="text-3xl font-bold mb-4">
                    {selectedProduct.name}
                  </h1>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">
                        {selectedProduct.rating}
                      </span>
                    </div>
                    <span className="text-gray-500">
                      ({selectedProduct.reviews} đánh giá)
                    </span>
                    <button
                      onClick={() => toggleFavorite(selectedProduct.id)}
                      className="ml-auto"
                    >
                      <Heart
                        className={`w-6 h-6 ${
                          favorites.includes(selectedProduct.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-400"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                    <p className="text-3xl font-bold text-red-600 mb-2">
                      {formatPrice(selectedProduct.price)}
                    </p>
                    <div className="flex gap-2 text-sm">
                      <span className="bg-red-500 text-white px-2 py-1 rounded">
                        Giảm 5%
                      </span>
                      <span className="text-gray-600">Trả góp 0%</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h3 className="font-semibold mb-2">Cam kết sản phẩm</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <Package className="w-4 h-4 text-blue-600 mt-1" />
                        <span>Nguyên hộp, đầy đủ phụ kiện từ nhà sản xuất</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Package className="w-4 h-4 text-blue-600 mt-1" />
                        <span>
                          Bảo hành 12 tháng tại trung tâm bảo hành chính hãng
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Package className="w-4 h-4 text-blue-600 mt-1" />
                        <span>
                          Đổi trả trong 30 ngày nếu có lỗi từ nhà sản xuất
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        selectedProduct.quantity > 0
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {selectedProduct.quantity > 0
                        ? `Còn hàng: ${selectedProduct.quantity} sản phẩm`
                        : "Hết hàng"}
                    </span>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        if (currentUser) setShowCheckout(true);
                        else {
                          showMessage("Vui lòng đăng nhập", "error");
                          setCurrentView("login");
                        }
                      }}
                      disabled={selectedProduct.quantity === 0}
                      className={`flex-1 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 ${
                        selectedProduct.quantity > 0
                          ? "bg-red-600 text-white hover:bg-red-700"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Mua ngay
                    </button>
                    <button
                      onClick={() => addToCart(selectedProduct)}
                      disabled={selectedProduct.quantity === 0}
                      className={`flex-1 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 ${
                        selectedProduct.quantity > 0
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Thêm vào giỏ
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Thông số kỹ thuật */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Thông số kỹ thuật</h2>
                <button className="text-blue-600 hover:underline text-sm">
                  Xem tất cả
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b">
                        <td className="bg-gray-50 px-4 py-3 font-medium w-1/3">
                          CPU
                        </td>
                        <td className="px-4 py-3">Intel Core i7-1355U</td>
                      </tr>
                      <tr className="border-b">
                        <td className="bg-gray-50 px-4 py-3 font-medium">
                          RAM
                        </td>
                        <td className="px-4 py-3">16GB DDR5</td>
                      </tr>
                      <tr className="border-b">
                        <td className="bg-gray-50 px-4 py-3 font-medium">
                          Ổ cứng
                        </td>
                        <td className="px-4 py-3">512GB SSD NVMe</td>
                      </tr>
                      <tr className="border-b">
                        <td className="bg-gray-50 px-4 py-3 font-medium">
                          Card đồ họa
                        </td>
                        <td className="px-4 py-3">Intel Iris Xe Graphics</td>
                      </tr>
                      <tr>
                        <td className="bg-gray-50 px-4 py-3 font-medium">
                          Màn hình
                        </td>
                        <td className="px-4 py-3">13.4" FHD+ (1920x1200)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b">
                        <td className="bg-gray-50 px-4 py-3 font-medium w-1/3">
                          Công nghệ màn hình
                        </td>
                        <td className="px-4 py-3">IPS, Anti-glare, 300 nits</td>
                      </tr>
                      <tr className="border-b">
                        <td className="bg-gray-50 px-4 py-3 font-medium">
                          Pin
                        </td>
                        <td className="px-4 py-3">54WHr, 3-cell Li-ion</td>
                      </tr>
                      <tr className="border-b">
                        <td className="bg-gray-50 px-4 py-3 font-medium">
                          Hệ điều hành
                        </td>
                        <td className="px-4 py-3">Windows 11 Home</td>
                      </tr>
                      <tr className="border-b">
                        <td className="bg-gray-50 px-4 py-3 font-medium">
                          Trọng lượng
                        </td>
                        <td className="px-4 py-3">1.2 kg</td>
                      </tr>
                      <tr>
                        <td className="bg-gray-50 px-4 py-3 font-medium">
                          Cổng kết nối
                        </td>
                        <td className="px-4 py-3">2x USB-C, 1x USB-A, HDMI</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Đánh giá */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Đánh giá sản phẩm</h2>
              {currentUser ? (
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold mb-4">Viết đánh giá của bạn</h3>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      Đánh giá (1-5 sao)
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-6 h-6 text-yellow-400 cursor-pointer hover:fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      Nội dung đánh giá
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="4"
                      placeholder="Chia sẻ trải nghiệm của bạn..."
                    ></textarea>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                    Gửi đánh giá
                  </button>
                </div>
              ) : (
                <p className="text-gray-600 mb-6">
                  Vui lòng đăng nhập để viết đánh giá
                </p>
              )}

              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="font-semibold">Nguyễn Văn A</span>
                    <span className="text-gray-500 text-sm">- 2024-11-15</span>
                  </div>
                  <p className="text-gray-700">
                    Sản phẩm rất tốt, hiệu năng mạnh mẽ, đáp ứng tốt nhu cầu
                    công việc và giải trí!
                  </p>
                </div>
                <div className="border-b pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                      <Star className="w-4 h-4 text-yellow-400" />
                    </div>
                    <span className="font-semibold">Trần Thị B</span>
                    <span className="text-gray-500 text-sm">- 2024-11-10</span>
                  </div>
                  <p className="text-gray-700">
                    Laptop đẹp, nhẹ, pin trâu. Tuy nhiên giá hơi cao so với cấu
                    hình.
                  </p>
                </div>
              </div>
            </div>

            {/* Sản phẩm liên quan */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Có thể bạn cũng thích</h2>
              <div className="grid grid-cols-5 gap-4">
                {products
                  .filter(
                    (p) =>
                      p.category === selectedProduct.category &&
                      p.id !== selectedProduct.id
                  )
                  .slice(0, 5)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="border rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
                      onClick={() => {
                        setSelectedProduct(product);
                        window.scrollTo(0, 0);
                      }}
                    >
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-32 object-cover"
                        />
                        {product.quantity === 0 && (
                          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                            Hết hàng
                          </div>
                        )}
                        {product.quantity > 0 && (
                          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                            Giảm 5%
                          </div>
                        )}
                      </div>
                      <div className="p-3">
                        <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-1 mb-2">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs">{product.rating}</span>
                        </div>
                        <p className="text-red-600 font-bold text-sm">
                          {formatPrice(product.price)}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {currentView === "orders" && currentUser && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Đơn hàng của bạn</h2>
            {orders.filter((o) => o.customerId === currentUser.id).length >
            0 ? (
              <div className="space-y-4">
                {orders
                  .filter((o) => o.customerId === currentUser.id)
                  .map((order) => (
                    <div key={order.id} className="border rounded-lg p-6">
                      <div className="flex justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-lg">Đơn #{order.id}</h3>
                          <p className="text-gray-600">Ngày: {order.date}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-600">
                          {order.status}
                        </span>
                      </div>
                      <div className="space-y-2 mb-4">
                        {order.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between text-sm"
                          >
                            <span>
                              {item.name} x {item.quantity}
                            </span>
                            <span className="font-semibold">
                              {formatPrice(item.price * item.quantity)}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Tổng:</span>
                          <span className="text-blue-600">
                            {formatPrice(order.totalAmount)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 py-12">
                Bạn chưa có đơn hàng nào
              </p>
            )}
          </div>
        )}

        {currentView === "admin-products" && currentUser?.role === "admin" && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Quản lý sản phẩm</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-semibold mb-4 text-lg">Thêm sản phẩm mới</h3>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Mã SP"
                  value={productForm.id}
                  onChange={(e) =>
                    setProductForm({ ...productForm, id: e.target.value })
                  }
                  className="px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Tên SP"
                  value={productForm.name}
                  onChange={(e) =>
                    setProductForm({ ...productForm, name: e.target.value })
                  }
                  className="px-4 py-2 border rounded-lg"
                />
                <select
                  value={productForm.brand}
                  onChange={(e) =>
                    setProductForm({ ...productForm, brand: e.target.value })
                  }
                  className="px-4 py-2 border rounded-lg"
                >
                  <option value="">Chọn hãng</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
                <select
                  value={productForm.category}
                  onChange={(e) =>
                    setProductForm({ ...productForm, category: e.target.value })
                  }
                  className="px-4 py-2 border rounded-lg"
                >
                  <option value="">Chọn danh mục</option>
                  {categories
                    .filter((c) => c.id !== "all")
                    .map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.parent ? `  • ${cat.name}` : cat.name}
                      </option>
                    ))}
                </select>
                <input
                  type="text"
                  placeholder="Cấu hình"
                  value={productForm.specs}
                  onChange={(e) =>
                    setProductForm({ ...productForm, specs: e.target.value })
                  }
                  className="px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="URL ảnh"
                  value={productForm.image}
                  onChange={(e) =>
                    setProductForm({ ...productForm, image: e.target.value })
                  }
                  className="px-4 py-2 border rounded-lg"
                />
                <input
                  type="number"
                  placeholder="Giá"
                  value={productForm.price}
                  onChange={(e) =>
                    setProductForm({ ...productForm, price: e.target.value })
                  }
                  className="px-4 py-2 border rounded-lg"
                />
                <input
                  type="number"
                  placeholder="Số lượng"
                  value={productForm.quantity}
                  onChange={(e) =>
                    setProductForm({ ...productForm, quantity: e.target.value })
                  }
                  className="px-4 py-2 border rounded-lg"
                />
                <button
                  onClick={handleAddProduct}
                  className="col-span-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Thêm sản phẩm
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left">Mã SP</th>
                    <th className="px-4 py-3 text-left">Tên</th>
                    <th className="px-4 py-3 text-left">Hãng</th>
                    <th className="px-4 py-3 text-left">Giá</th>
                    <th className="px-4 py-3 text-left">Số lượng</th>
                    <th className="px-4 py-3 text-left">Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3">{product.id}</td>
                      <td className="px-4 py-3 font-semibold">
                        {product.name}
                      </td>
                      <td className="px-4 py-3">{product.brand}</td>
                      <td className="px-4 py-3">
                        {formatPrice(product.price)}
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          defaultValue={product.quantity}
                          onBlur={(e) =>
                            handleUpdateProduct(
                              product.id,
                              "quantity",
                              e.target.value
                            )
                          }
                          className="w-20 px-2 py-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {currentView === "admin-users" && currentUser?.role === "admin" && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Quản lý khách hàng</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left">Mã KH</th>
                    <th className="px-4 py-3 text-left">Tên</th>
                    <th className="px-4 py-3 text-left">Email</th>
                    <th className="px-4 py-3 text-left">Trạng thái</th>
                    <th className="px-4 py-3 text-left">Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {users
                    .filter((u) => u.role === "customer")
                    .map((user) => (
                      <tr key={user.id} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3">{user.id}</td>
                        <td className="px-4 py-3 font-semibold">{user.name}</td>
                        <td className="px-4 py-3">{user.email}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              user.status === "Hoạt động"
                                ? "bg-green-100 text-green-600"
                                : "bg-red-100 text-red-600"
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => toggleUserStatus(user.id)}
                            className={`px-4 py-2 rounded-lg font-semibold ${
                              user.status === "Hoạt động"
                                ? "bg-red-500 text-white hover:bg-red-600"
                                : "bg-green-500 text-white hover:bg-green-600"
                            }`}
                          >
                            {user.status === "Hoạt động" ? "Khóa" : "Mở khóa"}
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {currentView === "admin-stats" && currentUser?.role === "admin" && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Thống kê</h2>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Tổng doanh thu</h3>
                  <p className="text-3xl font-bold">
                    {formatPrice(totalRevenue)}
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Tổng đơn hàng</h3>
                  <p className="text-3xl font-bold">{orders.length}</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Khách hàng</h3>
                  <p className="text-3xl font-bold">
                    {users.filter((u) => u.role === "customer").length}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Tồn kho</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left">Mã SP</th>
                      <th className="px-4 py-3 text-left">Tên</th>
                      <th className="px-4 py-3 text-left">Số lượng</th>
                      <th className="px-4 py-3 text-left">Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr
                        key={product.id}
                        className="border-b hover:bg-gray-50"
                      >
                        <td className="px-4 py-3">{product.id}</td>
                        <td className="px-4 py-3 font-semibold">
                          {product.name}
                        </td>
                        <td className="px-4 py-3 font-bold">
                          {product.quantity}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              product.quantity === 0
                                ? "bg-red-100 text-red-600"
                                : product.quantity <= 5
                                ? "bg-yellow-100 text-yellow-600"
                                : "bg-green-100 text-green-600"
                            }`}
                          >
                            {product.quantity === 0
                              ? "Hết hàng"
                              : product.quantity <= 5
                              ? "Sắp hết"
                              : "Còn hàng"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {showCart && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          onClick={() => setShowCart(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              <div className="p-6 border-b flex justify-between items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <h2 className="text-2xl font-bold">Giỏ hàng của bạn</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="hover:bg-blue-700 p-2 rounded-lg transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-16">
                    <ShoppingCart className="w-24 h-24 text-gray-300 mb-4" />
                    <p className="text-gray-500 text-lg">Giỏ hàng trống</p>
                    <button
                      onClick={() => {
                        setShowCart(false);
                        setCurrentView("home");
                      }}
                      className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Tiếp tục mua sắm
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 bg-gray-50 p-4 rounded-lg border hover:border-blue-300 transition"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {item.specs}
                          </p>
                          <p className="text-blue-600 font-bold mb-3">
                            {formatPrice(item.price)}
                          </p>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="bg-gray-200 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-300 font-bold"
                            >
                              -
                            </button>
                            <span className="w-12 text-center font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="bg-gray-200 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-300 font-bold"
                            >
                              +
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="ml-auto text-red-500 hover:text-red-700 flex items-center gap-1"
                            >
                              <Trash2 className="w-4 h-4" />
                              Xóa
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg text-blue-600">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="border-t p-6 bg-gray-50">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">
                      Tổng cộng ({totalItems} sản phẩm):
                    </span>
                    <span className="text-2xl font-bold text-red-600">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setShowCart(false);
                      setShowCheckout(true);
                    }}
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition text-lg"
                  >
                    Tiến hành thanh toán
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {showCheckout && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowCheckout(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <h2 className="text-2xl font-bold">Thông tin thanh toán</h2>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-4">
                  Thông tin giao hàng
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Họ và tên *"
                    value={orderInfo.name}
                    onChange={(e) =>
                      setOrderInfo({ ...orderInfo, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="tel"
                    placeholder="Số điện thoại *"
                    value={orderInfo.phone}
                    onChange={(e) =>
                      setOrderInfo({ ...orderInfo, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Địa chỉ giao hàng *"
                    value={orderInfo.address}
                    onChange={(e) =>
                      setOrderInfo({ ...orderInfo, address: e.target.value })
                    }
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-4">
                  Phương thức thanh toán
                </h3>
                <div className="space-y-3">
                  <label
                    className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                      orderInfo.paymentMethod === "COD"
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="COD"
                      checked={orderInfo.paymentMethod === "COD"}
                      onChange={(e) =>
                        setOrderInfo({
                          ...orderInfo,
                          paymentMethod: e.target.value,
                        })
                      }
                      className="w-5 h-5"
                    />
                    <div>
                      <p className="font-semibold">
                        Thanh toán khi nhận hàng (COD)
                      </p>
                      <p className="text-sm text-gray-600">
                        Thanh toán bằng tiền mặt khi nhận hàng
                      </p>
                    </div>
                  </label>
                  <label
                    className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                      orderInfo.paymentMethod === "Online"
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="Online"
                      checked={orderInfo.paymentMethod === "Online"}
                      onChange={(e) =>
                        setOrderInfo({
                          ...orderInfo,
                          paymentMethod: e.target.value,
                        })
                      }
                      className="w-5 h-5"
                    />
                    <div>
                      <p className="font-semibold">Thanh toán Online</p>
                      <p className="text-sm text-gray-600">
                        Chuyển khoản, thẻ ATM, Ví điện tử
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-3">Đơn hàng của bạn</h3>
                <div className="space-y-2 mb-3">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>
                        {item.name} x {item.quantity}
                      </span>
                      <span className="font-semibold">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-3 flex justify-between items-center">
                  <span className="font-bold text-lg">Tổng cộng:</span>
                  <span className="font-bold text-2xl text-red-600">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setShowCheckout(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 font-semibold"
                >
                  Quay lại
                </button>
                <button
                  onClick={handleCheckout}
                  className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold"
                >
                  Đặt hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-gray-900 text-gray-300 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Laptop className="w-8 h-8 text-blue-500" />
                <h3 className="text-xl font-bold text-white">LaptopStore</h3>
              </div>
              <p className="text-sm mb-4">Cửa hàng máy tính uy tín</p>
              <div className="flex gap-4">
                <Facebook className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
                <Instagram className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
                <Youtube className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Liên kết</h4>
              <ul className="space-y-2 text-sm">
                <li>Giới thiệu</li>
                <li>Sản phẩm</li>
                <li>Liên hệ</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Hỗ trợ</h4>
              <ul className="space-y-2 text-sm">
                <li>Chính sách bảo hành</li>
                <li>Chính sách đổi trả</li>
                <li>Thanh toán</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Liên hệ</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>123 Đường Láng, Hà Nội</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>1900 1234</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>support@laptopstore.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
            <p>&copy; 2024 LaptopStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LaptopStore;
