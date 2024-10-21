import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    footer: {
        borderTopWidth: 1,
        borderColor: '#000', // Black border for the top
        padding: 20,
        backgroundColor: '#f9f9f9', // Light background color for the footer
        marginTop: '20%'
    },
    main: {
        flexDirection: 'column', // Set to column to stack elements vertically
        justifyContent: 'flex-start', // Align items at the start
        marginBottom: 20,
    },
    section: {
        marginBottom: 15, // Space between sections
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 14,
        color: '#666',
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    contact: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10, // Add spacing between the icon and text
    },
    copyright: {
        borderTopWidth: 1,
        borderColor: '#ddd',
        paddingTop: 10,
        alignItems: 'center',
        margin: 20
    },
});
