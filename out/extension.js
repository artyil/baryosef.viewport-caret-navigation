"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function activate(context) {
    // console.log('Congratulations, your extension "viewport-goto" is now active!');
    context.subscriptions.push(vscode.commands.registerTextEditorCommand("cursorMoveViewPortTop", () => __awaiter(this, void 0, void 0, function* () {
        yield vscode.commands.executeCommand("cursorMove", {
            to: "viewPortTop",
            by: "line"
        });
    })));
    context.subscriptions.push(vscode.commands.registerTextEditorCommand("cursorMoveViewPortBottom", () => __awaiter(this, void 0, void 0, function* () {
        yield vscode.commands.executeCommand("cursorMove", {
            to: "viewPortBottom",
            by: "line",
            value: 0
        });
        // fix current bug `cursorMove to viewPortBottom should not scroll`
        // https://github.com/Microsoft/vscode/issues/25945
        yield vscode.commands.executeCommand("editorScroll", {
            to: "up",
            by: "line",
            value: 1
        });
    })));
    context.subscriptions.push(vscode.commands.registerTextEditorCommand("cursorMoveViewPortCenter", () => __awaiter(this, void 0, void 0, function* () {
        yield vscode.commands.executeCommand("cursorMove", {
            to: "viewPortCenter",
            by: "line"
        });
    })));
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map