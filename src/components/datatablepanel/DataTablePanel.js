import React, {Component} from 'react';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';

class DataTablePanel extends Component {
    service = new MajorsService();
    constructor(props) {
        super(props);

        /**
         * Props has the following values:
         * - heading
         * - value
         * - headers
         */
    }

    render() {
        return (
            <div className="panel">
                <div className="panel-heading">{this.props.heading}</div>
                <div className="panel-body">
                    <DataTable value={this.props.value}>
                        {this.props.headers.map((value, index) => {
                            return <Column field={value.field} header={value.header} key={index.toString()} />
                        })}
                    </DataTable>
                </div>
            </div>
        );
    }
}