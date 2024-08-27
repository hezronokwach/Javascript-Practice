num:
function Num(args) {
    if (typeof (args) == "number") {
        return true;
    }
    return false;
}
nan:
function Nan(args) {
    if (Number.isNaN(args)) {
        return true;
    }
    return false;
}
str:
function Str(args) {
    if (typeof (args) == "string") {
        return true;
    }
    return false;

}
bool:
function Bool(args) {
    if (typeof (args) == "boolean") {
        return true;
    }
    return false;
}
undef:
function Undef(args) {
    if (typeof (args) == "undefined") {
        return true;
    }
    return false;
}
def:
function Def(args) {
    if (args != null) {
        return true;
    }
    return false;
}
arr:
function Arr(args) {
    if (Array.isArray(args)) {
        return true;
    }
    return false;
}
obj:
function Obj(args) {
    if (typeof (args) == "object") {
        return true;
    }
    return false;
}
fun:
function Fun(args) {
    if (typeof (args) == "function") {
        return true;
    }
    return false;
}
truthy:
function Truthy(args) {
    if ((args) == true) {
        return true;
    }
    return false;
}
falsy:
function Falsy(args) {
    if ((args) == false) {
        return true;
    }
    return false;
}


