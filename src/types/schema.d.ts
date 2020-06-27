// tslint:disable
// graphql typescript definitions

declare namespace GQL {
interface IGraphQLResponseRoot {
data?: IQuery | IMutation | ISubscription;
errors?: Array<IGraphQLResponseError>;
}

interface IGraphQLResponseError {
/** Required for all errors */
message: string;
locations?: Array<IGraphQLResponseErrorLocation>;
/** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
[propName: string]: any;
}

interface IGraphQLResponseErrorLocation {
line: number;
column: number;
}

interface IQuery {
__typename: "Query";
hello: string;
sum: number;
}

interface IHelloOnQueryArguments {
name?: string | null;
}

interface ISumOnQueryArguments {
a: number;
b: number;
}

interface IMutation {
__typename: "Mutation";
register: string;
}

interface IRegisterOnMutationArguments {
email: string;
password: string;
}

interface ISubscription {
__typename: "Subscription";
count: number;
}
}

// tslint:enable
