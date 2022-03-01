import { graphql } from "gatsby";
export const positionFragment = graphql`
	fragment Position on ContentfulStylePosition {
		position
		hPosition
		vPosition
		space
		space

		internal {
			type
		}
	}
`;
export const fontFragment = graphql`
	fragment Font on ContentfulStyleFont {
		fontSize
		lineHeight
		letterSpacing
		textAlign

		bold
		italic
		color
		fontFace {
			slug
			name
		}
		internal {
			type
		}
	}
`;
export const imageFragment = graphql`
	fragment Image on ContentfulElementImage {
		image {
			title
			description
			sizes {
				aspectRatio
			}
			file {
				url
			}
			fluid(maxWidth: 1600, quality: 75) {
				src
				...GatsbyContentfulFluid_withWebp
			}
		}
		imageSp {
			title
			description
			sizes {
				aspectRatio
			}
			file {
				url
			}
			fluid(maxWidth: 1080, quality: 60) {
				...GatsbyContentfulFluid_withWebp
			}
		}
		positionPc {
			... on ContentfulStylePosition {
				...Position
			}
		}
		positionSp {
			... on ContentfulStylePosition {
				...Position
			}
		}
		stylesJson {
			positionPc {
				position
				space
				spacingType
			}
			positionSp {
				position
				space
				spacingType
			}
		}
		containerTag
		objectFit
		objectFitSp
		id
		widthPc
		widthSp
		caption
		link
		class
		internal {
			type
		}
	}
`;
export const embedFragment = graphql`
	fragment Embed on ContentfulElementEmbed {
		slug
		embedId
		type
		width_pc
		width_sp
		positionPc {
			... on ContentfulStylePosition {
				...Position
			}
		}
		positionSp {
			... on ContentfulStylePosition {
				...Position
			}
		}
		stylesJson {
			positionPc {
				space
			}
			positionSp {
				space
			}
		}
		internal {
			type
		}
	}
`;
export const swipeFragment = graphql`
	fragment Swipe on ContentfulElementSwipe {
		slug

		items {
			... on ContentfulElementImage {
				...Image
			}
		}
		width_pc
		width_sp
		positionPc {
			... on ContentfulStylePosition {
				...Position
			}
		}
		positionSp {
			... on ContentfulStylePosition {
				...Position
			}
		}
		stylesJson {
			positionPc {
				space
			}
			positionSp {
				space
			}
		}
		internal {
			type
		}
	}
`;
export const mapFragment = graphql`
	fragment Map on ContentfulElementMap {
		node_locale
		name
		locationVisualizer {
			lat
			lon
		}
		width_pc
		width_sp

		positionPc {
			... on ContentfulStylePosition {
				...Position
			}
		}
		positionSp {
			... on ContentfulStylePosition {
				...Position
			}
		}
		stylesJson {
			positionPc {
				space
			}
			positionSp {
				space
			}
		}
		internal {
			type
		}
	}
`;
export const buttonFragment = graphql`
	fragment Button on ContentfulElementButton {
		node_locale
		width_pc
		width_sp
		name

		link

		positionPc {
			... on ContentfulStylePosition {
				...Position
			}
		}
		positionSp {
			... on ContentfulStylePosition {
				...Position
			}
		}
		stylesJson {
			fontPc {
				fontSize
				fontFace
				lineHeight
				color

				italic
				textAlign
				letterSpacing
				whiteSpace
			}
			fontSp {
				fontSize
				fontFace
				lineHeight

				color
				italic
				textAlign
				letterSpacing
				whiteSpace
			}
			positionPc {
				space
				spacingType
			}
			positionSp {
				space
				spacingType
			}
		}
		class
		internal {
			type
		}
	}
`;
export const textFragment = graphql`
	fragment Text on ContentfulElementText {
		text
		fontPc {
			... on ContentfulStyleFont {
				...Font
			}
		}
		fontSp {
			... on ContentfulStyleFont {
				...Font
			}
		}
		positionPc {
			... on ContentfulStylePosition {
				...Position
			}
		}
		positionSp {
			... on ContentfulStylePosition {
				...Position
			}
		}
		stylesJson {
			fontPc {
				fontSize
				lineHeight
				color
				italic
				textAlign
				letterSpacing
				whiteSpace
			}
			fontSp {
				fontSize
				lineHeight
				color
				italic
				textAlign
				letterSpacing
				whiteSpace
			}
			positionPc {
				space
			}
			positionSp {
				space
			}
		}
		display
		width_pc
		width_sp
		type
		class
		internal {
			type
		}
	}
`;
export const textFieldFragment = graphql`
	fragment TextField on ContentfulElementTextField {
		fontPc {
			... on ContentfulStyleFont {
				...Font
			}
		}
		fontSp {
			... on ContentfulStyleFont {
				...Font
			}
		}
		positionPc {
			... on ContentfulStylePosition {
				...Position
			}
		}
		positionSp {
			... on ContentfulStylePosition {
				...Position
			}
		}

		field {
			raw
			references {
				... on ContentfulElementImage {
					contentful_id
					__typename
					...Image
				}
				... on ContentfulElementButton {
					contentful_id
					__typename
					...Button
				}
				... on ContentfulElementLink {
					contentful_id
					__typename
					...Link
				}
				... on ContentfulElementEmbed {
					contentful_id
					__typename
					...Embed
				}
				... on ContentfulRtFlexColumn {
					contentful_id
					__typename
					...rtFlexColumn
				}
				... on ContentfulRtTextField {
					contentful_id
					__typename
					...RtTextField
				}
				... on ContentfulAsset {
					contentful_id
					__typename
					fluid(maxWidth: 1600, quality: 75) {
						src
						...GatsbyContentfulFluid_withWebp
					}
					fixed(width: 1600) {
						width
						height
						src
						srcSet
					}
				}
			}
		}
		widthPc
		widthSp
		headerMarginPc
		headerMarginSp
		paragraphMarginPc
		paragraphMarginSp
		class
		stylesJson {
			fontPc {
				fontSize
				lineHeight
				color
				italic
				textAlign
				letterSpacing
			}
			fontSp {
				fontSize
				lineHeight
				color
				italic
				textAlign
				letterSpacing
			}
			positionPc {
				space
			}
			positionSp {
				space
			}
		}
		internal {
			type
		}
	}
`;
export const rtTextFieldFragment = graphql`
	fragment RtTextField on ContentfulRtTextField {
		fontPc {
			... on ContentfulStyleFont {
				...Font
			}
		}
		fontSp {
			... on ContentfulStyleFont {
				...Font
			}
		}
		positionPc {
			... on ContentfulStylePosition {
				...Position
			}
		}
		positionSp {
			... on ContentfulStylePosition {
				...Position
			}
		}

		field {
			raw
			references {
				... on ContentfulElementImage {
					contentful_id
					__typename
					...Image
				}
				... on ContentfulElementButton {
					contentful_id
					__typename
					...Button
				}
				... on ContentfulElementLink {
					contentful_id
					__typename
					...Link
				}

				... on ContentfulAsset {
					contentful_id
					__typename
					fluid(maxWidth: 1600, quality: 75) {
						src
						...GatsbyContentfulFluid_withWebp
					}
					fixed(width: 1600) {
						width
						height
						src
						srcSet
					}
				}
			}
		}
		width_pc
		width_sp
		headerMarginPc
		headerMarginSp
		paragraphMarginPc
		paragraphMarginSp
		class
		stylesJson {
			fontPc {
				fontSize
				lineHeight
				color
				italic
				textAlign
				letterSpacing
			}
			fontSp {
				fontSize
				lineHeight
				color
				italic
				textAlign
				letterSpacing
			}
			positionPc {
				space
			}
			positionSp {
				space
			}
		}
		internal {
			type
		}
	}
`;
export const linkFragment = graphql`
	fragment Link on ContentfulElementLink {
		slug
		label
		url
		width_pc
		width_sp
		node_locale
		fontPc {
			... on ContentfulStyleFont {
				...Font
			}
		}
		fontSp {
			... on ContentfulStyleFont {
				...Font
			}
		}
		positionPc {
			... on ContentfulStylePosition {
				...Position
			}
		}
		positionSp {
			... on ContentfulStylePosition {
				...Position
			}
		}
		stylesJson {
			fontPc {
				fontSize
				lineHeight
				textAlign
			}
			fontSp {
				fontSize
				lineHeight
				textAlign
			}
			positionPc {
				space
			}
			positionSp {
				space
			}
			class
		}
		icon
		containerTag
		class
		internal {
			type
		}
	}
`;
export const rtflexColumn = graphql`
	fragment rtFlexColumn on ContentfulRtFlexColumn {
		node_locale
		spaceAround
		alignItems
		alignItemsSp
		width_pc
		width_sp
		flexDirectionPc
		flexDirectionSp
		positionPc {
			... on ContentfulStylePosition {
				...Position
			}
		}
		positionSp {
			... on ContentfulStylePosition {
				...Position
			}
		}

		class
		stylesJson {
			positionPc {
				space
			}
			positionSp {
				space
			}
		}
		internal {
			type
		}

		columnItem {
			... on ContentfulElementImage {
				...Image
			}
			... on ContentfulElementLink {
				...Link
			}

			... on ContentfulElementEmbed {
				...Embed
			}
			... on ContentfulElementButton {
				...Button
			}
			... on ContentfulElementSwipe {
				...Swipe
			}
			... on ContentfulRtTextField {
				contentful_id
				__typename
				...RtTextField
			}
		}
	}
`;
export const flexColumn = graphql`
	fragment FlexColumn on ContentfulElementFlexColumn {
		node_locale
		spaceAround
		alignItems
		alignItemsSp
		width_pc
		width_sp
		flexDirectionPc
		flexDirectionSp
		class
		stylesJson {
			positionPc {
				position
				space
			}
			positionSp {
				position
				space
			}
		}
		internal {
			type
		}
		positionPc {
			... on ContentfulStylePosition {
				...Position
			}
		}
		positionSp {
			... on ContentfulStylePosition {
				...Position
			}
		}

		columnItem {
			... on ContentfulElementImage {
				...Image
			}
			... on ContentfulElementLink {
				...Link
			}

			... on ContentfulElementLayoutCard {
				...LayoutCard
			}
			... on ContentfulElementEmbed {
				...Embed
			}
			... on ContentfulElementSwipe {
				...Swipe
			}
			... on ContentfulElementText {
				...Text
			}
			... on ContentfulElementTextField {
				...TextField
			}
			... on ContentfulElementFlexColumn {
				node_locale
				spaceAround
				alignItems
				alignItemsSp
				width_pc
				width_sp
				flexDirectionPc
				flexDirectionSp
				class
				stylesJson {
					positionPc {
						position
						space
					}
					positionSp {
						position
						space
					}
				}
				internal {
					type
				}
				positionPc {
					... on ContentfulStylePosition {
						...Position
					}
				}
				positionSp {
					... on ContentfulStylePosition {
						...Position
					}
				}
				columnItem {
					... on ContentfulElementImage {
						...Image
					}
					... on ContentfulElementLayoutCard {
						...LayoutCard
					}
					... on ContentfulElementLayoutCard {
						...LayoutCard
					}
					... on ContentfulElementEmbed {
						...Embed
					}
					... on ContentfulElementLink {
						...Link
					}
					... on ContentfulElementSwipe {
						...Swipe
					}
					... on ContentfulElementTextField {
						...TextField
					}
					... on ContentfulElementBlock {
						width_pc
						width_sp
						childMargin
						childMarginSp
						class
						positionPc {
							... on ContentfulStylePosition {
								...Position
							}
						}
						positionSp {
							... on ContentfulStylePosition {
								...Position
							}
						}
						stylesJson {
							class
							positionPc {
								position
								space
							}
							positionSp {
								position
								space
							}
						}
						internal {
							type
						}
						body {
							... on ContentfulElementText {
								...Text
							}
							... on ContentfulElementTextField {
								...TextField
							}
							... on ContentfulElementImage {
								...Image
							}
							... on ContentfulElementLink {
								...Link
							}
							... on ContentfulElementBlock {
								width_pc
								width_sp
								childMargin
								childMarginSp
								class
								positionPc {
									... on ContentfulStylePosition {
										...Position
									}
								}
								positionSp {
									... on ContentfulStylePosition {
										...Position
									}
								}
								stylesJson {
									class
									positionPc {
										position
										space
									}
									positionSp {
										position
										space
									}
								}
								internal {
									type
								}
								body {
									... on ContentfulElementText {
										...Text
									}

									... on ContentfulElementTextField {
										...TextField
									}
									... on ContentfulElementImage {
										...Image
									}
									... on ContentfulElementLink {
										...Link
									}
									... on ContentfulElementReference {
										...Reference
									}
									... on ContentfulElementBlock {
										width_pc
										width_sp
										childMargin
										childMarginSp
										class
										positionPc {
											... on ContentfulStylePosition {
												...Position
											}
										}
										positionSp {
											... on ContentfulStylePosition {
												...Position
											}
										}
										stylesJson {
											positionPc {
												position
												space
											}
											positionSp {
												position
												space
											}
										}
										internal {
											type
										}
										body {
											... on ContentfulElementText {
												...Text
											}

											... on ContentfulElementTextField {
												...TextField
											}
											... on ContentfulElementImage {
												...Image
											}
											... on ContentfulElementLink {
												...Link
											}
											... on ContentfulElementReference {
												...Reference
											}
										}
									}
								}
							}
						}
					}
				}
			}
			... on ContentfulElementBlock {
				width_pc
				width_sp
				childMargin
				childMarginSp
				class
				positionPc {
					... on ContentfulStylePosition {
						...Position
					}
				}
				positionSp {
					... on ContentfulStylePosition {
						...Position
					}
				}
				stylesJson {
					class
					positionPc {
						position
						space
					}
					positionSp {
						position
						space
					}
				}
				internal {
					type
				}
				body {
					... on ContentfulElementText {
						...Text
					}
					... on ContentfulElementTextField {
						...TextField
					}
					... on ContentfulElementImage {
						...Image
					}
					... on ContentfulElementLink {
						...Link
					}
					... on ContentfulElementReference {
						...Reference
					}
					... on ContentfulElementBlock {
						width_pc
						width_sp
						childMargin
						childMarginSp
						class
						positionPc {
							... on ContentfulStylePosition {
								...Position
							}
						}
						positionSp {
							... on ContentfulStylePosition {
								...Position
							}
						}
						stylesJson {
							class
							positionPc {
								position
								space
							}
							positionSp {
								position
								space
							}
						}
						internal {
							type
						}
						body {
							... on ContentfulElementText {
								...Text
							}
							... on ContentfulElementReference {
								...Reference
							}
							... on ContentfulElementTextField {
								...TextField
							}
							... on ContentfulElementImage {
								...Image
							}
							... on ContentfulElementLink {
								...Link
							}
							... on ContentfulElementReference {
								...Reference
							}
							... on ContentfulElementBlock {
								width_pc
								width_sp
								childMargin
								childMarginSp
								class
								positionPc {
									... on ContentfulStylePosition {
										...Position
									}
								}
								positionSp {
									... on ContentfulStylePosition {
										...Position
									}
								}
								stylesJson {
									class
									positionPc {
										position
										space
									}
									positionSp {
										position
										space
									}
								}
								internal {
									type
								}
								body {
									... on ContentfulElementText {
										...Text
									}
									... on ContentfulElementReference {
										...Reference
									}
									... on ContentfulElementTextField {
										...TextField
									}
									... on ContentfulElementImage {
										...Image
									}
									... on ContentfulElementLink {
										...Link
									}
									... on ContentfulElementReference {
										...Reference
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;

export const layoutCardFragment = graphql`
	fragment LayoutCard on ContentfulElementLayoutCard {
		headLine {
			... on ContentfulElementText {
				...Text
			}
			... on ContentfulElementReference {
				...Reference
			}
		}
		header
		image {
			...Image
		}
		textField {
			...TextField
		}
		positionPc {
			... on ContentfulStylePosition {
				...Position
			}
		}
		positionSp {
			... on ContentfulStylePosition {
				...Position
			}
		}
		stylesJson {
			positionPc {
				space
			}
			positionSp {
				space
			}
		}
		node_locale
		caption
		imageCaption
		links {
			... on ContentfulElementLink {
				...Link
			}
		}
		layoutRef
		onLoadType
		width_pc
		width_sp
		internal {
			type
		}
	}
`;
export const referenceFragment = graphql`
	fragment Reference on ContentfulElementReference {
		name
		width_pc
		width_sp
		positionPc {
			... on ContentfulStylePosition {
				...Position
			}
		}
		positionSp {
			... on ContentfulStylePosition {
				...Position
			}
		}
		stylesJson {
			fontPc {
				fontSize
				lineHeight
			}
			fontSp {
				fontSize
				lineHeight
			}
			positionPc {
				space
			}
			positionSp {
				space
			}
		}
		internal {
			type
		}
	}
`;

export const blockFragment = graphql`
	fragment Block on ContentfulElementBlock {
		width_pc
		width_sp
		childMargin
		childMarginSp
		class
		positionPc {
			... on ContentfulStylePosition {
				...Position
			}
		}
		positionSp {
			... on ContentfulStylePosition {
				...Position
			}
		}

		internal {
			type
		}
		stylesJson {
			class
			positionPc {
				position
				space
			}
			positionSp {
				position
				space
			}
		}
		body {
			... on ContentfulElementText {
				...Text
			}

			... on ContentfulElementTextField {
				...TextField
			}
			... on ContentfulElementImage {
				...Image
			}
			... on ContentfulElementEmbed {
				...Embed
			}
			... on ContentfulElementSwipe {
				...Swipe
			}
			... on ContentfulElementFlexColumn {
				...FlexColumn
			}
			... on ContentfulElementReference {
				...Reference
			}
			... on ContentfulElementLink {
				...Link
			}
			... on ContentfulElementButton {
				...Button
			}
			... on ContentfulElementBlock {
				width_pc
				width_sp
				childMargin
				childMarginSp
				class
				positionPc {
					... on ContentfulStylePosition {
						...Position
					}
				}
				positionSp {
					... on ContentfulStylePosition {
						...Position
					}
				}
				stylesJson {
					class
					positionPc {
						position
						space
					}
					positionSp {
						position
						space
					}
				}
				internal {
					type
				}
				body {
					... on ContentfulElementFlexColumn {
						...FlexColumn
					}
					... on ContentfulElementText {
						...Text
					}

					... on ContentfulElementTextField {
						...TextField
					}
					... on ContentfulElementImage {
						...Image
					}
					... on ContentfulElementReference {
						...Reference
					}
					... on ContentfulElementLink {
						...Link
					}
					... on ContentfulElementEmbed {
						...Embed
					}
					... on ContentfulElementBlock {
						width_pc
						width_sp
						childMargin
						childMarginSp
						class
						positionPc {
							... on ContentfulStylePosition {
								...Position
							}
						}
						positionSp {
							... on ContentfulStylePosition {
								...Position
							}
						}
						stylesJson {
							class
							positionPc {
								position
								space
							}
							positionSp {
								position
								space
							}
						}
						internal {
							type
						}
						body {
							... on ContentfulElementText {
								...Text
							}

							... on ContentfulElementTextField {
								...TextField
							}
							... on ContentfulElementLink {
								...Link
							}
							... on ContentfulElementImage {
								...Image
							}
							... on ContentfulElementReference {
								...Reference
							}
							... on ContentfulElementEmbed {
								...Embed
							}
						}
					}
				}
			}
		}
	}
`;
