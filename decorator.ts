import 'reflect-metadata';

function dec1() {
    console.log('dec1(): evaluated');
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('dec1(): called');
    };
}

function dec2() {
    console.log('dec2(): evaluated');
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('dec2(): called');
    };
}

class C {
    @dec1()
    @dec2()
    method() {}
    // Similar with dec1()(dec2()(new C().method))
}

// ***** Class Decorator *****
@sealed
class Greeter {
    @format('Hello, %s')
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        const formatString = getFormat(this, 'greeting');
        return formatString.replace('%s', this.greeting);
    }
}
function sealed(constructor: Function) {
    // Function is the type of Class
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

// ***** Method Decorator *****
function enumerable(val: boolean) {
    return function (
        target: any,
        name: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = val;
    };
}

// ***** Attribute Decorator *****
const formatMetadataKey = Symbol('format');
function format(formatString: string) {
    Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propKey);
}
