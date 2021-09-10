const ServerError = require('../utils/errors/ServerError');
const Product = require('../models/Product');

class ProductController {
  async getAllProducts(req, res, next) {
    try {
      let products = await Product.find().lean();
      products = products.map(({image, ...rest}) => ({...rest, image: `http://localhost:4000/uploads/${image.path}`}));
      res.status(200).json({
        success: true,
        products
      });
    } catch(err) {
      return next(ServerError.internalError(err));
    }

  }
}

module.exports = new ProductController();