"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const port = 4500;
const app = express_1.default();
app.use(morgan_1.default('combined'));
app.use(express_1.json());
app.get('/', (req, res) => res.json({ status: true, message: 'Hello world' }));
app.listen(port, () => console.log(`api server listening on port ${port}`));
//# sourceMappingURL=server.js.map