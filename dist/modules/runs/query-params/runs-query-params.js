"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunQueryParams = void 0;
const rangeDate_query_params_1 = require("../../../common/query-params/rangeDate-query-params");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
var ErrorEnum;
(function (ErrorEnum) {
    ErrorEnum["true"] = "true";
    ErrorEnum["false"] = "false";
    ErrorEnum["all"] = "all";
})(ErrorEnum || (ErrorEnum = {}));
class RunQueryParams extends rangeDate_query_params_1.RangeDateQueryParams {
    constructor() {
        super(...arguments);
        this.error = null;
    }
}
exports.RunQueryParams = RunQueryParams;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Estado',
        enum: ErrorEnum,
        example: 'all',
        default: 'all',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)({
        message: 'el status debe ser uno de los siguientes valores = en, dis, all',
    }),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (value === undefined || value === null || value === '') {
            return null;
        }
        if (value === 'true')
            return true;
        if (value === 'false')
            return false;
        if (value === 'all')
            return null;
        return value;
    }),
    __metadata("design:type", Boolean)
], RunQueryParams.prototype, "error", void 0);
//# sourceMappingURL=runs-query-params.js.map