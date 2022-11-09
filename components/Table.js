import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';

const Table = () => {
  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Order ID</DataTable.Title>
        <DataTable.Title>Customer ID</DataTable.Title>
        <DataTable.Title>Zone</DataTable.Title>
      </DataTable.Header>
      <ScrollView>
        <DataTable.Row>
          <DataTable.Cell>Radhika</DataTable.Cell>
          <DataTable.Cell>Dosa</DataTable.Cell>
          <DataTable.Cell>23</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Krishna</DataTable.Cell>
          <DataTable.Cell>Uttapam</DataTable.Cell>
          <DataTable.Cell>26</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Vanshika</DataTable.Cell>
          <DataTable.Cell>Brownie</DataTable.Cell>
          <DataTable.Cell>20</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Teena</DataTable.Cell>
          <DataTable.Cell>Pizza</DataTable.Cell>
          <DataTable.Cell>24</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Teena</DataTable.Cell>
          <DataTable.Cell>Pizza</DataTable.Cell>
          <DataTable.Cell>24</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Teena</DataTable.Cell>
          <DataTable.Cell>Pizza</DataTable.Cell>
          <DataTable.Cell>24</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Teena</DataTable.Cell>
          <DataTable.Cell>Pizza</DataTable.Cell>
          <DataTable.Cell>24</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Teena</DataTable.Cell>
          <DataTable.Cell>Pizza</DataTable.Cell>
          <DataTable.Cell>24</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Teena</DataTable.Cell>
          <DataTable.Cell>Pizza</DataTable.Cell>
          <DataTable.Cell>24</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Teena</DataTable.Cell>
          <DataTable.Cell>Pizza</DataTable.Cell>
          <DataTable.Cell>24</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Teena</DataTable.Cell>
          <DataTable.Cell>Pizza</DataTable.Cell>
          <DataTable.Cell>24</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Teena</DataTable.Cell>
          <DataTable.Cell>Pizza</DataTable.Cell>
          <DataTable.Cell>24</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Teena</DataTable.Cell>
          <DataTable.Cell>Pizza</DataTable.Cell>
          <DataTable.Cell>24</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Teena</DataTable.Cell>
          <DataTable.Cell>Pizza</DataTable.Cell>
          <DataTable.Cell>24</DataTable.Cell>
        </DataTable.Row>
      </ScrollView>
    </DataTable>
  );
};

export default Table;

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    height: '80%',
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
});
